import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";

const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true }));

router.post("/signup", signup);
  
router.post("/login", login);

router.post("/logout", logout);


export default router;