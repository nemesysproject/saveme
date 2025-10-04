import { Request, Response } from 'express';
import { PrismaClient, User, Role } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const prisma = new PrismaClient();

// --- Helper para generar el token JWT ---
const generateJwt = (user: User & { role: Role }) => {
  const secret = process.env.JWT_SECRET!;
  console.log('JWT Secret:', secret);
  if (!secret) {
    throw new Error('JWT_SECRET no está definido en las variables de entorno.');
  }
  const payload = { id: user.id, role: user.role.name };
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

export const registerController = async (req: Request, res: Response) => {
  const { email, password, firstname, lastname, phone } = req.body;

  if (!email || !password || !firstname || !lastname) {
    return res.status(400).json({ message: 'Email, contraseña, nombre y apellido son requeridos.' });
  }

  try {
    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    console.log('existingUser', existingUser);

    if (existingUser) {
      return res.status(409).json({ message: 'El email ya está en uso.' });
    }

    // Hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Obtener el rol de 'USER' (asume que ya existe en la BD)
    const userRole = await prisma.role.findUnique({ where: { name: 'USER' } });
    console.log('userRole', userRole);
    if (!userRole) {
      // En un caso real, podrías crearlo si no existe o lanzar un error de configuración del servidor
      return res.status(500).json({ message: 'Error de configuración: Rol de usuario no encontrado.' });
    }

    // Crear la persona y el usuario en una transacción para asegurar la consistencia
    const newPerson = await prisma.person.create({
      data: {
        firstname,
        lastname,
        phone,
        user: {
          create: {
            email,
            password: hashedPassword,
            roleId: userRole.id,
          },
        },
      },
      include: {
        user: { // Incluir los datos del usuario creado y su rol
          include: {
            role: true,
          },
        },
      },
    });

    const token = generateJwt(newPerson.user);

    return res.status(201).json({ message: 'Usuario registrado exitosamente', token });
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  console
  if (!email || !password) {
    return res.status(400).json({ message: 'El email y la contraseña son requeridos.' });
  }

  // Buscar al usuario por su email e incluir su rol
  const user = await prisma.user.findUnique({
    where: { email },
    include: { role: true },
  });

  console.log('user', user);

  if (!user) {
    return res.status(401).json({ message: 'Credenciales inválidas.' });
  }

  // Comparar la contraseña proporcionada con la hasheada en la BD
  // El password puede ser null para usuarios de Google, por lo que se debe verificar.
  if (!user.password) {
    return res.status(401).json({ message: 'Credenciales inválidas.' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Credenciales inválidas.' });
  }

  const token = generateJwt(user);

  return res.json({ message: 'Login exitoso', token });
};

export const refreshTokenController = async (req: Request, res: Response) => {
  // El authMiddleware ya ha verificado el token y ha adjuntado el payload del usuario en req.user
  const user = req.user as { id: number; role: string };

  if (!user || !user.id || !user.role) {
    // Este caso es improbable si el middleware se ejecuta correctamente, pero es una buena práctica de seguridad.
    return res.status(401).json({ message: 'No se pudo identificar al usuario desde el token.' });
  }

  // Para refrescar, necesitamos los datos completos del usuario, incluido el rol.
  const fullUser = await prisma.user.findUnique({
    where: { id: user.id },
    include: { role: true }
  });

  if (!fullUser) {
    return res.status(401).json({ message: 'Usuario no encontrado.' });
  }
  const token = generateJwt(fullUser);
  res.json({ message: 'Token refrescado exitosamente', token });
};

export const logoutController = async (req: Request, res: Response) => {
  // Con JWT, el logout real se gestiona en el cliente eliminando el token.
  // El servidor puede tener una lista negra de tokens si se requiere invalidación inmediata,
  // pero para una implementación simple, este endpoint sirve como una señal para el cliente.
  // El middleware de autenticación asegura que solo un usuario autenticado puede "cerrar sesión".
  res.status(200).json({ message: 'Cierre de sesión exitoso. El cliente debe descartar el token.' });
};

// --- Controlador para el callback de Google ---
export const googleCallbackController = async (req: Request, res: Response) => {
  // Passport adjunta el usuario (o un error) a req.user después de la autenticación
  if (!req.user) {
    // Esto podría redirigir a una página de error en el frontend
    return res.status(401).json({ message: 'Fallo en la autenticación con Google.' });
  }

  // El usuario de req.user es el que devolvió la estrategia de Passport
  const user = req.user as unknown as (User & { role: Role });
  const token = generateJwt(user);

  // En un caso real, redirigirías al frontend con el token
  // Por ejemplo: res.redirect(`http://localhost:4200/auth/callback?token=${token}`);
  res.status(200).json({ message: 'Autenticación con Google exitosa', token });
};
