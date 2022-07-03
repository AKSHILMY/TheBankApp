import express from "express";

import {
  getCustomers,
  createCustomer,
  getCustomer,
  deleteCustomer,
  updateCustomer,
} from "../controllers/customers.js";

const router = express.Router();

router.get("/", getCustomers);

router.post("/", createCustomer);

router.get("/:id", getCustomer);

router.delete("/:id", deleteCustomer);

router.patch("/:id", updateCustomer);

export default router;
