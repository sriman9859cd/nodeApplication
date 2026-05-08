import bcrypt from "bcrypt";
import db from "../models/index.cjs";
const User = db.User;

//API for healthCheck
export const healthCheck = async (req, res) => {
    res.status(200).json({
        status: "ok"
    })
}

//API for User Registration
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        //check whether the email is already existing or not 
        const existingUser = await User.findOne({
            where: { email }
        });
        if (existingUser) {
            return res.status(400).json({
                message: "Email already registered"
            })
        }
        //password hashing
        const hashedPassword = await bcrypt.hash(password, 10);
        //Create User
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            message: "User registered Succussfully",
            user
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}
