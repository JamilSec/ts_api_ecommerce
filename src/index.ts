import express from 'express';
import { RegistrarPeticion } from './middlewares/logMiddleware';
import { ManejarErroresGlobales } from './utils/errorHandler';
import { setupSwagger } from './config/swaggerConfig';
import roleRoutes from './routes/roleRoutes';

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(express.json());
app.use(RegistrarPeticion);

// Configurar Swagger
setupSwagger(app);

// Rutas de roles
app.use('/api/roles', roleRoutes);

// Middleware global de errores
app.use(ManejarErroresGlobales);

app.listen(port, () => {
    console.log(`🚀 Servidor iniciado en http://localhost:${port}`);
});