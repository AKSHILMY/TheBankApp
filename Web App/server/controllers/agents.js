import { database } from "../database/db.js";

export const getAgents = (req, res) => {
  database("agents", [])
    .then(function (result) {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
