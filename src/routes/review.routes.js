import express from 'express';
const Router = express.Router();
import Review from '../controllers/review.controllers.js';
import {authenticate} from '../middlewares/auth.middlewares.js';

Router.post('/submit', Review);

export default Router;