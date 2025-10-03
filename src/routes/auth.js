import { Router } from "express";
import { login, logoutUser, registerUser } from "../controllers/auth.js";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(registerUser);
router.route("/logout").post(logoutUser);

export default router;