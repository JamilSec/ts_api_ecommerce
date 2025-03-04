import { Router } from 'express';
import { CrearRolController, ListarRolesController } from '../controllers/roleController';

const roleRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Endpoints para gestionar roles
 */

/**
 * @swagger
 * /api/roles:
 *   get:
 *     summary: Obtener todos los roles
 *     description: Retorna una lista de roles disponibles en la base de datos.
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: Lista de roles obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_rol:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Administrador"
 */
roleRoutes.get('/', ListarRolesController);

/**
 * @swagger
 * /api/roles:
 *   post:
 *     summary: Crear un nuevo rol
 *     description: Crea un nuevo rol en la base de datos.
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Usuario"
 *     responses:
 *       201:
 *         description: Rol creado exitosamente
 *       400:
 *         description: Error en la creación del rol
 */
roleRoutes.post('/', CrearRolController);

export default roleRoutes;