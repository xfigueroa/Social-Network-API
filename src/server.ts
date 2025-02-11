import express from "express";
import { connectDB } from "./config/db";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";
import thoughtRoutes from "./routes/thoughtRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);

connectDB();

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
