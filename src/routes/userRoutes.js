

import { Router } from "express";
import { About, postUser, login } from "../controllers/userController.js";

const router = Router()

router.get("/about", About)
router.post("/signup", postUser)
router.post("/login", login)

export default router;