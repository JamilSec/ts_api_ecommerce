// controllers/roleController.ts
import { RequestHandler } from 'express';
import { CrearRol, ListarRoles } from '../services/roleService';

export const CrearRolController: RequestHandler = async (req, res) => {
    try {
        const { nombre } = req.body;
        await CrearRol(nombre);
        // No uses return aquí
        res.status(201).json({ mensaje: 'Rol creado exitosamente' });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const ListarRolesController: RequestHandler = async (req, res) => {
    try {
        const roles = await ListarRoles();
        // Tampoco uses return aquí
        res.json(roles);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};