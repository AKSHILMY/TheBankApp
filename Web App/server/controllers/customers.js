const uuid = require('uuid');

let customers = [];

const config = require("../knexfile.js");
const db = require("knex")(config.development);

const getCustomers = (req, res) => {
  db.raw('select * from customers')
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
  
};

 const createCustomer = (req, res) => {
   customers.push({ ...req.body, id: uuid() });
   res.send("Customer created");
 };

const getCustomer = (req, res) => {
  const customer = customers.find((u) => {
    return u.id == req.params.id;
  });
  res.send(customer);
};

const deleteCustomer = (req, res) => {
  customers = customers.filter((customer) => customer.id !== req.params.id);
  res.send("Customer Deleted");
};

const updateCustomer = (req, res) => {
  const customer = customers.find((customer) => customer.id === req.params.id);
  if (req.body.firstName) customer.firstName = req.body.firstName;
  if (req.body.LastName) customer.lastName = req.body.lastName;
  if (req.body.age) customer.age = req.body.age;
  res.send(customer);
};

module.exports =  {getCustomers,createCustomer, getCustomer,deleteCustomer,updateCustomer}