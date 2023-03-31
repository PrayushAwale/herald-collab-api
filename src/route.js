import { Router } from "express";
import { createBill } from "./handlers/billing.js";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "./handlers/employee.js";
import {
  createOrder,
  getBilling,
  getOrder,
  updateOrder,
} from "./handlers/order.js";
import {
  createFoodItem,
  updateFoodItem,
  getFoodItem,
  getFoodItems,
  deleteFoodItem,
} from "./handlers/fooditem.js";

const router = Router();

router.post("/placeorder", createOrder);
router.get("/getorder", getOrder);
router.put("/updateorder", updateOrder);
router.get("/getBilling", getBilling);

router.post("/createemployee", createEmployee);
router.get("/getemployee", getEmployee);
router.get("/getemployees", getEmployees);
router.delete("/deleteemployee", deleteEmployee);
router.put("/updateemployee", updateEmployee);

router.post("/createfooditem", createFoodItem);
router.put("/updatefooditem", updateFoodItem);
router.get("/getfooditem", getFoodItem);
router.get("/getfooditems", getFoodItems);
router.delete("/deletefooditem", deleteFoodItem);

router.post("/newbill", createBill);

export default router;
