import { CrearRol, ListarRoles } from './../../src/services/roleService';
import * as roleRepository from './../../src/repositories/roleRepository';

// Mock del repository
jest.mock('./../../src/repositories/roleRepository');

describe('roleService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('CrearRol debería llamar a CrearRolBD con el nombre proporcionado', async () => {
        const mockCrearRolBD = jest.spyOn(roleRepository, 'CrearRolBD').mockResolvedValue();

        await CrearRol('Administrador');

        expect(mockCrearRolBD).toHaveBeenCalledWith('Administrador');
        expect(mockCrearRolBD).toHaveBeenCalledTimes(1);
    });

    test('CrearRol debería lanzar un error si no se proporciona un nombre', async () => {
        await expect(CrearRol('')).rejects.toThrow('El nombre del rol es obligatorio.');
    });

    test('ListarRoles debería llamar a ListarRolesBD y retornar los roles', async () => {
        const rolesMock = [{ id_rol: 1, nombre: 'Admin' }, { id_rol: 2, nombre: 'User' }];
        jest.spyOn(roleRepository, 'ListarRolesBD').mockResolvedValue(rolesMock);

        const roles = await ListarRoles();

        expect(roles).toEqual(rolesMock);
        expect(roleRepository.ListarRolesBD).toHaveBeenCalledTimes(1);
    });

    // 🔴 TEST QUE FORZA ERROR
    test('ListarRoles debería fallar si el repositorio lanza un error', async () => {
        jest.spyOn(roleRepository, 'ListarRolesBD').mockRejectedValue(new Error('Error al obtener roles'));

        await expect(ListarRoles()).rejects.toThrow('Error al obtener roles');
    });

    // 🔴 TEST QUE FORZA ERROR
    test('CrearRol debería fallar si el repositorio lanza un error', async () => {
        jest.spyOn(roleRepository, 'CrearRolBD').mockRejectedValue(new Error('Error en la BD'));

        await expect(CrearRol('Administrador')).rejects.toThrow('Error en la BD');
    });
});