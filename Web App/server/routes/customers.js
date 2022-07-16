import express from "express";

import {
  getCustomers,
  createCustomer,
  getCustomer,
  deleteCustomer,
  updateCustomer,
  createFixedAccount,
  withdraw,
} from "../controllers/customers.js";

const router = express.Router();

router.get("/", getCustomers);

router.post("/", createCustomer);
router.post("/fixed", createFixedAccount);
router.post("/withdrawDeposit", withdraw);

router.get("/:id", getCustomer);

router.delete("/", deleteCustomer);

router.patch("/:id", updateCustomer);

export default router;
