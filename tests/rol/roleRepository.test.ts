import { CrearRolBD, ListarRolesBD } from '../../src/repositories/roleRepository';
import { ObtenerConexion, sql } from '../../src/config/dbConfig';

jest.mock('./../../src/config/dbConfig');

describe('roleRepository', () => {
    let mockQuery: jest.Mock;

    beforeEach(() => {
        mockQuery = jest.fn();
        (ObtenerConexion as jest.Mock).mockResolvedValue({ 
            request: jest.fn(() => ({ input: jest.fn().mockReturnThis(), query: mockQuery })) 
        });
    });

    test('CrearRolBD debería ejecutar el procedimiento almacenado correctamente', async () => {
        await CrearRolBD('Prueba');

        expect(mockQuery).toHaveBeenCalledWith('EXEC usp_RolInsertar @nombre');
    });

    test('ListarRolesBD debería retornar roles desde la base de datos', async () => {
        const mockRoles = [{ id_rol: 1, nombre: 'Admins' }];
        mockQuery.mockResolvedValue({ recordset: mockRoles });

        const roles = await ListarRolesBD();

        expect(roles).toEqual(mockRoles);
    });

    // 🔴 TEST QUE FORZA ERROR
    test('CrearRolBD debería fallar si la consulta SQL genera un error', async () => {
        mockQuery.mockRejectedValue(new Error('Error en SQL'));

        await expect(CrearRolBD('Prueba')).rejects.toThrow('Error en SQL');
    });

    // 🔴 TEST QUE FORZA ERROR
    test('ListarRolesBD debería fallar si la consulta SQL genera un error', async () => {
        mockQuery.mockRejectedValue(new Error('Fallo en la consulta'));

        await expect(ListarRolesBD()).rejects.toThrow('Fallo en la consulta');
    });
});