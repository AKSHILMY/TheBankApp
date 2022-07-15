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

export const createAgent = (req, res) => {
  database("addAgent", [
    req.body.Name,
    req.body.NIC,
    req.body.DOB,
    req.body.Phone_NO,
    req.body.Email,
    req.body.Username,
    req.body.Password,
    req.body.Gender,
  ])
    .then(function (result) {
      res.send("Agent is created");
    })
    .catch((err) => {
      console.log(err);
      res.send("Customer is not created");
    });
};
