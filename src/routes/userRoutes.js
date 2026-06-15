

import { Router } from "express";
import { About } from "../controllers/userController.js";

const router = Router()

router.get("/about", About)

export default router;