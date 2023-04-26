import { Router } from "express";
// import { createBill } from "./handlers/billing.js";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "./handlers/employee.js";
import {
  createBill,
  createOrder,
  getBilling,
  getOrder,
  getUnserved,
  updateOrder,
  updateServe,
} from "./handlers/order.js";
import {
  createFoodItem,
  updateFoodItem,
  getFoodItems,
  deleteFoodItem,
} from "./handlers/fooditem.js";

const router = Router();

router.post("/placeorder", createOrder);
router.get("/getorder/:id", getOrder);
router.put("/updateorder", updateOrder);
router.put("/updateServe", updateServe);
router.put("/createBill", createBill);
router.get("/getBilling/:id", getBilling);
router.get("/unserved/:id", getUnserved);

router.post("/createemployee", createEmployee);
router.get("/getemployee", getEmployee);
router.get("/getemployees/:id", getEmployees);
router.delete("/deleteemployee", deleteEmployee);
router.put("/updateemployee", updateEmployee);

router.post("/createfooditem", createFoodItem);
router.put("/updatefooditem", updateFoodItem);
router.get("/getfooditems/:id", getFoodItems);
router.delete("/deletefooditem/:id", deleteFoodItem);
// router.get("/getfooditem", getFoodItem);

// router.post("/newbill", createBill);

export default router;
