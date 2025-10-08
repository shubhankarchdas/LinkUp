import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import usersRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true // allow frontend to send cookies
})
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/users",usersRoutes);
app.use("/api/chat",chatRoutes);


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`); 
    connectDB();
});