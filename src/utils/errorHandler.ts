// src/utils/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

export function ManejarErroresGlobales(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error('Error global:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
}