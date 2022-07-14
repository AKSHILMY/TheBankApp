import { database } from "../database/db.js";

export const getAgents = (req, res) => {
  database("agents", [])
    .then(function (result) {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteAgent = (req, res) => {
  database("deleteAgent", [req.body.Agent_ID])
    .then(function (result) {
      res.send(`${req.body.Agent_ID} Deleted`);
    })
    .catch((err) => {
      console.log(err);
    });
};
