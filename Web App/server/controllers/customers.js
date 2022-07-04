import { v4 as uuid } from "uuid";

let customers = [];

export const getCustomers = (req, res) => {
  res.send(customers);
};

export const createCustomer = (req, res) => {
  customers.push({ ...req.body, id: uuid() });
  res.send("Customer created");
};

export const getCustomer = (req, res) => {
  const customer = customers.find((u) => {
    return u.id == req.params.id;
  });
  res.send(customer);
};

export const deleteCustomer = (req, res) => {
  customers = customers.filter((customer) => customer.id !== req.params.id);
  res.send("Customer Deleted");
};

export const updateCustomer = (req, res) => {
  const customer = customers.find((customer) => customer.id === req.params.id);
  if (req.body.firstName) customer.firstName = req.body.firstName;
  if (req.body.LastName) customer.lastName = req.body.lastName;
  if (req.body.age) customer.age = req.body.age;
  res.send(customer);
};
