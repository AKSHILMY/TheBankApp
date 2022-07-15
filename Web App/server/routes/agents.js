import express from "express";

import { getAgents, deleteAgent, createAgent } from "../controllers/agents.js";

const router = express.Router();

router.get("/", getAgents);
router.delete("/", deleteAgent);
router.post("/", createAgent);

export default router;
