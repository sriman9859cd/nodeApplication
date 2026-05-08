
import express from "express"
import dotenv from "dotenv"
import healthRoutes from "./routes/healthRoutes.js"

// To reads the .env file and makes values (variables) available through
dotenv.config();

const app = express();

// app.use() is used to register middleware (route modules), 
app.use(express.json());
app.use("/health", healthRoutes)
app.use("/user", healthRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port number ${PORT}`)
})