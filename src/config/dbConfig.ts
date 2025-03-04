// src/config/dbConfig.ts

import 'dotenv/config'; // Carga variables desde .env
import sql from 'mssql';

const dbSettings: sql.config = {
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    server: process.env.DB_SERVER || '',
    database: process.env.DB_NAME || '',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 1433,
    requestTimeout: 30000,  // Aumentar tiempo de espera a 30s
    pool: {
        max: 10, // Número máximo de conexiones simultáneas
        min: 1,
        idleTimeoutMillis: 30000, // Tiempo antes de cerrar una conexión inactiva
    },
    options: {
        encrypt: false, // 🔴 Desactiva TLS (Solo si es seguro hacerlo)
        trustServerCertificate: true, // Obliga a usar un certificado válido
    },
};



export async function ObtenerConexion(): Promise<sql.ConnectionPool> {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error('Error conectando a la BD:', error);
        throw error;
    }
}

export { sql };