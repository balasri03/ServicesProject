import {FormController} from '../controllers/form.controller.js';
import { getFormHistory } from "../controllers/bookingHistory.controller.js";
import express from 'express';

const router=express.Router()

router.route("/").post(FormController)
router.get("/history/:customerId", getFormHistory);


export default router