import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database/db.js'
import userRoutes from './routes/user.route.js'

dotenv.config()
const app=express()

app.use(express.json())


const PORT=process.env.PORT || 3000
app.use("/api/users", userRoutes)
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

"http://localhost:8000/api/users/register"

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})
app.use(express.json());

