import express from "express";
import {stripePayment} from "../controllers/paymentController.js";


const router = express.Router();

router.post("/payment", stripePayment)


export default router