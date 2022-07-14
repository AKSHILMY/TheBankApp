import express from "express";

import { getAgents, deleteAgent } from "../controllers/agents.js";

const router = express.Router();

router.get("/", getAgents);
router.delete("/", deleteAgent);

export default router;
