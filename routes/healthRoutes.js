import express from "express"
import { healthCheck, registerUser } from "../controller/healthController.js"

const router = express.Router()
// router.get() is used to define a API endpoint(GET)
router.get("/", healthCheck);
router.post("/register", registerUser);

export default router;


