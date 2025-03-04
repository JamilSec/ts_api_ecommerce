// src/services/roleService.ts

import { CrearRolBD, ListarRolesBD } from '../repositories/roleRepository';
import { Rol } from '../models/rol';

export async function CrearRol(nombre: string): Promise<void> {
    if (!nombre) {
        throw new Error('El nombre del rol es obligatorio.');
    }
    await CrearRolBD(nombre);
}

export async function ListarRoles(): Promise<Rol[]> {
    return ListarRolesBD();
}