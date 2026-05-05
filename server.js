
import express from "express"
import dotenv from "dotenv"

let PORT = 3000

const app = express();
app.listen(PORT, () => {
    console.log(`Server Started on port number ${PORT}`)
})