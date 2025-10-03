import express from 'express';
const Router = express.Router();
import Payment from '../controllers/payment.controller.js';
import {authenticate} from '../middlewares/auth.middlewares.js';

Router.post('/process-payment', Payment);

export default Router;