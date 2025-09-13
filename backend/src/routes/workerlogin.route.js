import express from "express";
import { workerlogin, setAvailability } from "../controllers/workerlogin.controller.js";

const router = express.Router();

router.post("/", workerlogin);
router.post("/", setAvailability);

export default router;