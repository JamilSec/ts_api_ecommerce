// src/repositories/roleRepository.ts

import { ObtenerConexion, sql } from '../config/dbConfig';
import { Rol } from '../models/rol';

/**
 * Inserta un rol usando el SP "usp_RolInsertar".
 */
export async function CrearRolBD(nombre: string): Promise<void> {
    const pool = await ObtenerConexion();
    await pool.request()
        .input('nombre', sql.VarChar(50), nombre)
        .query('EXEC usp_RolInsertar @nombre');
}

/**
 * Obtiene todos los roles con una consulta directa.
 */
export async function ListarRolesBD(): Promise<Rol[]> {
    const pool = await ObtenerConexion();
    const resultado = await pool.request()
        .query<Rol>('SELECT id_rol, nombre FROM Roles');
    return resultado.recordset;
}