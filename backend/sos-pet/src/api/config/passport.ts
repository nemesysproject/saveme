import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: '/api/auth/google/callback', // Debe coincidir con la de Google Console
            scope: ['profile', 'email'],
        },
        async (accessToken: string, refreshToken: string, profile: Profile, done) => {
            try {
                // 1. Buscar si el usuario ya existe por su email
                let user = await prisma.user.findUnique({
                    where: { email: profile.emails?.[0].value },
                    include: { role: true },
                });

                if (user) {
                    // 2. Si el usuario existe, lo devolvemos
                    // Opcional: podrías guardar el `profile.id` de Google en tu registro de usuario
                    // para vincular la cuenta si no lo has hecho antes.
                    return done(null, user);
                }

                // 3. Si el usuario no existe, lo creamos
                const userRole = await prisma.role.findUnique({ where: { name: 'USER' } });
                if (!userRole) {
                    throw new Error('Rol de usuario por defecto no encontrado.');
                }

                // Creamos la persona y el usuario en una transacción
                const newPerson = await prisma.person.create({
                    data: {
                        firstname: profile.name?.givenName || 'Usuario',
                        lastname: profile.name?.familyName || 'Google',
                        user: {
                            create: {
                                email: profile.emails![0].value,
                                // El schema requiere una contraseña. Como es un login de Google,
                                // generamos un valor aleatorio no utilizable.
                                // La solución ideal es hacer el campo 'password' opcional en schema.prisma.
                                password: `google-oauth-${Date.now()}-${Math.random()}`,
                                // Podrías añadir un campo 'provider' o 'googleId' al modelo User
                                // provider: 'google',
                                // googleId: profile.id,
                                roleId: userRole.id,
                            },
                        },
                    },
                });

                // Después de crear la persona, el objeto 'newPerson' contiene 'userId'.
                // Usamos ese ID para obtener el objeto 'user' completo con su rol.
                // Esto es más robusto que depender de la inferencia de tipos de un 'include' anidado.
                const createdUser = await prisma.user.findUnique({
                    where: { id: newPerson.userId },
                    include: { role: true },
                });

                // Si por alguna razón el usuario no se encuentra (muy improbable), lanzamos un error.
                if (!createdUser) throw new Error("No se pudo recuperar el usuario recién creado.");

                return done(null, createdUser);
            } catch (error) {
                return done(error, false);
            }
        }
    )
);

// Passport no necesita serializar/deserializar al usuario si usas JWT (sesiones deshabilitadas)
// El tipo 'user' aquí es el que devuelve la estrategia. No es estrictamente 'User',
// sino un objeto que contiene los datos del usuario. Lo tipamos de forma más flexible
// para que coincida con lo que Passport maneja internamente.
passport.serializeUser((user: any, done) => done(null, user.id));
passport.deserializeUser(async (id: bigint, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: Number(id) } });
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

export default passport;
