import {Router} from 'express';
import UserController from './controllers/User.Controller';

const routes = Router();

routes.get('/users', UserController.index);

export default routes;
