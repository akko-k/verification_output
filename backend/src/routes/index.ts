import { Router } from 'express';
import todoRouter from './todo.route';

const apiRouter = Router();

apiRouter.use('/todos', todoRouter);

export default apiRouter;
