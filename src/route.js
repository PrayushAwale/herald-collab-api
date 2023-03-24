import { Router } from "express";
import {
  createOrder,
  getBilling,
  getOrder,
  updateOrder,
} from "./handlers/order.js";

const router = Router();

router.post("/placeorder", createOrder);
router.get("/getorder", getOrder);
router.put("/updateorder", updateOrder);
router.get("/getBilling", getBilling);

export default router;
