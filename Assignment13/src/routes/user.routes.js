import express from "express";
import { signup, getProfile } from "../controllers/user.controller.js";
import { validateSignup } from "../validations/user.validation.js";

const router = express.Router();

router.post("/signup", validateSignup, signup);
router.get("/myprofile", getProfile);

export default router;
