import express from 'express';
const Router = express.Router();
import processNotification from '../controllers/notification.controller.js';
import {authenticate} from '../middlewares/auth.middlewares.js';

Router.post('/send-notification', processNotification);

export default Router;