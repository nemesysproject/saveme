import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const registerController = async (req: Request, res: Response) => {
  const { email, password, firstname, lastname, phone } = req.body;

  if (!email || !password || !firstname || !lastname) {
    return res.status(400).json({ message: 'Email, contraseña, nombre y apellido son requeridos.' });
  }

  try {
    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'El email ya está en uso.' });
    }

    // Hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Obtener el rol de 'USER' (asume que ya existe en la BD)
    const userRole = await prisma.role.findUnique({ where: { name: 'USER' } });
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
        user: true, // Incluir los datos del usuario creado
      },
    });

    const secret = process.env.JWT_SECRET!;
    const token = jwt.sign({ id: newPerson.userId, role: userRole.name }, secret, { expiresIn: '1h' });

    res.status(201).json({ message: 'Usuario registrado exitosamente', token });
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'El email y la contraseña son requeridos.' });
    }

    // Buscar al usuario por su email e incluir su rol
    const user = await prisma.user.findUnique({
        where: { email },
        include: { role: true },
    });

    if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    // Comparar la contraseña proporcionada con la hasheada en la BD
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    const secret = process.env.JWT_SECRET!;
    const token = jwt.sign({ id: user.id, role: user.role.name }, secret, { expiresIn: '1h' });

    res.json({ message: 'Login exitoso', token });
};

export const refreshTokenController = async (req: Request, res: Response) => {
    // El authMiddleware ya ha verificado el token y ha adjuntado el payload del usuario en req.user
    const userId = req.user?.id;

    if (!userId) {
        // Este caso es improbable si el middleware se ejecuta correctamente, pero es una buena práctica de seguridad.
        return res.status(401).json({ message: 'No se pudo identificar al usuario desde el token.' });
    }

    const secret = process.env.JWT_SECRET!;
    // Generamos un nuevo token con una nueva fecha de expiración
    const token = jwt.sign({ id: userId }, secret, { expiresIn: '1h' });

    res.json({ message: 'Token refrescado exitosamente', token });
};

export const logoutController = async (req: Request, res: Response) => {
    // Con JWT, el logout real se gestiona en el cliente eliminando el token.
    // El servidor puede tener una lista negra de tokens si se requiere invalidación inmediata,
    // pero para una implementación simple, este endpoint sirve como una señal para el cliente.
    // El middleware de autenticación asegura que solo un usuario autenticado puede "cerrar sesión".
    res.status(200).json({ message: 'Cierre de sesión exitoso. El cliente debe descartar el token.' });
};
