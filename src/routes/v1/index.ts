import { Router } from "express";
import authRoutes from "./auth";

const router = Router();

// Import routes
router.use("/api/auth", authRoutes);

export default router;
