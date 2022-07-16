import { v4 as uuid } from "uuid";
import { database } from "../database/db.js";

export const getCustomers = (req, res) => {
  let customers;
  database("customers", [])
    .then(function (result) {
      customers = result;
      return database("getFixedID", []);
    })
    .then(function (result1) {
      customers = { customers: customers, fixed: result1 };
      return database("getFixedDetails", []);
    })
    .then(function (result2) {
      customers = { ...customers, fixedDetails: result2 };
      // res.send(All);
      return database("customerCount", []);
    })
    .then(function (result3) {
      customers = { ...customers, customerCount: result3 };
      return database("agentCount", []);
    })
    .then(function (result4) {
      const All = { ...customers, agentCount: result4 };
      res.send(All);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createCustomer = (req, res) => {
  database("addCentralizedAccount", [
    req.body.Account_No,
    req.body.amount,
    req.body.account_type,
    req.body.special_request,
  ])
    .then(function () {
      database("addCustomer", [
        req.body.Name,
        req.body.Username,
        req.body.Password,
        req.body.Account_No,
        req.body.DOB,
        req.body.Phone_No,
        req.body.Email,
        req.body.Gender,
      ]);
    })
    .then(function (result) {
      database("addAssignedAgent", req.body.Agent_ID);
      res.send("Customer is created");
      console.log(req.body);
    })
    .catch((err) => {
      console.log(err);
      res.send("Customer is not created");
    });
};

export const createFixedAccount = (req, res) => {
  database("createFixedAccount", [
    req.body.Account_No,
    req.body.Customer_ID,
    parseFloat(req.body.Amount),
    req.body.Period,
    req.body.DateofDeposit,
  ])
    .then(function (result) {
      res.send(`${req.body.Customer_ID} fixed updated`);
    })
    .catch((err) => {
      console.log(err);
      res.send("Fixed Customer is not created");
    });
  console.log(req.body);
};

export const getCustomer = (req, res) => {
  database("getCustomer", [req.params.id])
    .then(function (result) {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCustomer = (req, res) => {
  database("deleteCustomer1", [req.body.Account_No])
    .then(function (result) {
      database("deleteCustomer2", [req.body.Customer_ID]);
      res.send(`${req.body.Customer_ID} Deleted`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const withdraw = (req, res) => {
  database("withdrawDeposit", [req.body.Balance, req.body.Account_No])
    .then(function (result) {
      res.send(`${req.body.Balance} amount updated to ${req.body.Account_No}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateCustomer = (req, res) => {
  console.log(req.body);
  database("updateCustomer1", [req.body.Account_Type, req.body.Account_No])
    .then(function () {
      database("updateCustomer2", [
        req.body.Special_Request_Permission,
        req.body.Account_No,
      ]);
    })
    .then(function () {
      database("updateCustomer3", [req.body.Password, req.body.Account_No]);
    })
    .then(function () {
      database("updateCustomer4", [req.body.Email, req.body.Account_No]);
    })
    .then(function () {
      database("updateCustomer5", [req.body.Phone_No, req.body.Account_No]);
    })
    .then(function () {
      database("updateCustomer6", [req.body.Agent_ID, req.body.Customer_ID]);
      res.send(`${req.body.Customer_ID} is updated`);
    })
    .catch((err) => {
      console.log(err);
    });

  // res.send(customer);
};
