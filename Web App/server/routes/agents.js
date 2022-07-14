import express from "express";

import { getAgents } from "../controllers/agents.js";

const router = express.Router();

router.get("/", getAgents);

export default router;
