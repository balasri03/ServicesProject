import { Router } from "express";
import cleaningController from "../controllers/cleaningController.js";
import electricalController from "../controllers/electricalController.js";
import PaintingController from "../controllers/paintingController.js";
import plumbingController from "../controllers/plumbingController.js";
import carpentryController from "../controllers/carpentryController.js";
const router = Router();

router.post("/cleaning", cleaningController.createCleaning);
router.post("/electrical",electricalController)
router.post("/painting",PaintingController)
router.post("/plumbing",plumbingController)
router.post ("/carpentry",carpentryController)
export default router;
