import express from "express"
import { healthCheck } from "../controller/healthController.js"

const router = express.Router()
// router.get() is used to define a API endpoint(GET)
router.get("/", healthCheck);

export default router;


