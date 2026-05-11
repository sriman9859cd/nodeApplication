import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {

    try {

        // Get authorization header
        const authHeader = req.headers.authorization;

        // Check token exists
        if (!authHeader) {
            return res.status(401).json({
                message: "Token missing"
            });
        }
        // Extract token
        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Store user data
        req.user = decoded;
        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid token"
        });
    }
};