import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import customerRoutes from "./routes/customers.js";
import agnetsRoutes from "./routes/agents.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/customers", customerRoutes);
app.use("/agents", agnetsRoutes);
app.get("/", (req, res) => res.send("Welcome to the Customers API!"));
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
