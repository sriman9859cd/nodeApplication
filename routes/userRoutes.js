import express from "express"
import { healthCheck } from "../controller/healthController.js"
import { registerUser } from "../controller/userRegisterController.js"
import { loginUser } from "../controller/authController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const router = express.Router()
router.get("/", healthCheck);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get(
    "/profile",
    authMiddleware,
    (req, res) => {

        res.status(200).json({
            message: "Protected route accessed",
            user: req.user
        });
    }
);
export default router;


