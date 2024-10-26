import 'reflect-metadata';
import 'tsconfig-paths/register';
import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { AppDataSource } from '@/config/appDataSource';
import apiRouter from '@/routes';
import { errorHandler } from '@/middleware/errorHandler';
dotenv.config();

export const API_BASE_URL = '/api';

export const app = express();

export const start = async () => {
  const app = express();
  const port = process.env.PORT || 8000;

  const corsOptions = {
    origin: [process.env.FRONTEND_BASE_URL || 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

  app.use(cors(corsOptions));
  app.use(express.json());

  AppDataSource.initialize()
    .then(() => {
      app.use(API_BASE_URL, apiRouter);
      app.use(errorHandler);

      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}/api/todos`);
      });
    })
    .catch((error) => {
      console.error('Error during Data Source initialization:', error);
    });
};

start();
