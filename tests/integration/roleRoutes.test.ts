import request from 'supertest';
import express from 'express';
import router from './../../src/routes/roleRoutes';
import { setupSwagger } from './../../src/config/swaggerConfig';

const app = express();
app.use(express.json());
setupSwagger(app); // Para que no afecte las pruebas pero Swagger siga funcionando
app.use('/api/roles', router);

describe('🔹 API /api/roles (Integration Test)', () => {
    test('GET /api/roles debería devolver una lista de roles', async () => {
        const response = await request(app).get('/api/roles');
        
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });

    test('POST /api/roles debería crear un nuevo rol', async () => {
        const nuevoRol = { nombre: 'PruebaRole' };

        const response = await request(app)
            .post('/api/roles')
            .send(nuevoRol);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('mensaje', 'Rol creado exitosamente');
    });

    test('POST /api/roles debería fallar si no se envía nombre', async () => {
        const response = await request(app)
            .post('/api/roles')
            .send({});

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'El nombre del rol es obligatorio.');
    });
});
