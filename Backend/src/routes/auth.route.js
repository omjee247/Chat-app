import express from "express";
import { login, logout, signup, updateProfile, check } from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router();

// router.use(express.json())
// router.use(express.urlencoded({ extended: true }));

router.post("/signup", signup);
  
router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, check);

export default router;