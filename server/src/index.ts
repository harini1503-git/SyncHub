import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req,res)=>{
    res.send("api running properly.........");
});
app.use("/auth", authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})