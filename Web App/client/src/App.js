import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "./api/customers";
import CustomerTable from "./components/customers/customerTable";
import AddCustomer from "./components/customers/addCustomer";
import FixedAccouts from "./components/customers/fixedAccouts";
import AddFixedAccount from "./components/customers/addFixedAccout";
import CustomerDetails from "./components/customers/customerDetails";
import NavBar from "./components/header/navBar";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";
import AgentTable from "./components/agents/AgentTable";
import AgentDetails from "./components/agents/AgentDetails";
import AddAgent from "./components/agents/AddAgent";
import Login from "./components/login/Login";

function App() {
  const [customers, setCustomers] = useState([]);
  const [agents, setAgents] = useState([]);
  const [fixed, setFixed] = useState([]);
  const [fixedDetails, setFixedDetails] = useState([]);

  const retrieveCustomers = async () => {
    const response = await api.get("/customers");
    return response.data;
  };

  const retrieveAgents = async () => {
    const response = await api.get("/agents");
    return response.data;
  };

  const updateCustomer = async (customer) => {
    const response = await api.patch(
      `/customers/${customer.Customer_ID}`,
      customer
    );
    return response.data;
  };

  const createCustomer = async (customer) => {
    const response = await api.post("/customers", customer);
    return response.data;
  };

  const createAgent = async (agent) => {
    const response = await api.post("/agents", agent);
    return response.data;
  };

  const createFixedCustomer = async (customer) => {
    const response = await api.post("/customers/fixed", customer);
    return response.data;
  };

  const deleteCustomer = async (Account_No, Customer_ID) => {
    const response = await api.delete("/customers", {
      data: {
        Account_No: Account_No,
        Customer_ID: Customer_ID,
      },
    });
    return response.data;
  };

  const deleteAgent = async (Agent_ID) => {
    const response = await api.delete("/agents", {
      data: { Agent_ID: Agent_ID },
    });
    return response.data;
  };

  useEffect(() => {
    const getAllCustomers = async () => {
      const allcustomers = await retrieveCustomers();
      if (allcustomers.customers) {
        setCustomers(allcustomers.customers);
      }
      if (allcustomers.fixed) {
        let list = [];
        allcustomers.fixed.map((f) => {
          list.push(f.Customer_ID);
        });
        setFixed(list);
      }
      if (allcustomers.fixedDetails) {
        setFixedDetails(allcustomers.fixedDetails);
      }
    };

    const getAllAgents = async () => {
      const allagents = await retrieveAgents();
      if (allagents) {
        setAgents(allagents);
      }
      // console.log(allagents);
    };
    getAllCustomers();
    getAllAgents();
  }, []);

  function addCustomerHandler(customer) {
    const AddCustomer = async () => {
      const addcustomer = await createCustomer(customer);
      console.log(addcustomer);
    };
    AddCustomer();
  }

  function addAgentHandler(agent) {
    const AddAgent = async () => {
      const addagent = await createAgent(agent);
      console.log(addagent);
    };
    AddAgent();
  }

  function addFixedAccountHandler(customer) {
    const AddFixedCustomer = async () => {
      const addfixedcustomer = await createFixedCustomer(customer);
      console.log(addfixedcustomer);
    };
    AddFixedCustomer();
  }

  function updateCustomerHandler(customer) {
    console.log(customer);
    const UpdateCustomer = async () => {
      const customerUpdate = await updateCustomer(customer);
      console.log(customerUpdate);
    };
    UpdateCustomer();
  }

  function deleteCustomerHandler(Account_No, Customer_ID) {
    const DeleteCustomer = async () => {
      const customerDelete = await deleteCustomer(Account_No, Customer_ID);
      console.log(customerDelete);
    };
    DeleteCustomer();
  }

  function deleteAgentHandler(Agent_ID) {
    const DeleteAgent = async () => {
      const agentDelete = await deleteAgent(Agent_ID);
      console.log(agentDelete);
    };
    DeleteAgent();
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="customers">
          <Route
            path="addCustomer"
            element={<AddCustomer addHandler={addCustomerHandler} />}
          />
          <Route
            path="addFixedAccount/:id"
            element={
              <AddFixedAccount
                addHandler={addFixedAccountHandler}
              ></AddFixedAccount>
            }
          />
          <Route
            path="fixedAccounts"
            element={<FixedAccouts fixedAccoutDetails={fixedDetails} />}
          />
          <Route
            path="customerDetails/:id"
            element={
              <CustomerDetails
                customers={customers}
                fixed={fixed}
                updateCustomer={updateCustomerHandler}
                deleteCustomer={deleteCustomerHandler}
                fixedDetails={fixedDetails}
              >
                {" "}
              </CustomerDetails>
            }
          ></Route>
          <Route
            path=""
            element={<CustomerTable customers={customers}></CustomerTable>}
          />
        </Route>

        <Route path="agents">
          <Route
            path="addAgent"
            element={<AddAgent addHandler={addAgentHandler} />}
          />
          <Route
            path="agentDetails/:id"
            element={
              <AgentDetails agents={agents} deleteAgent={deleteAgentHandler} />
            }
          />
          <Route path="" element={<AgentTable agents={agents} />} />
        </Route>
        <Route
          path="/"
          element={
            <Dashboard
              count={{ customers: customers.length, agents: agents.length }}
            />
          }
        />
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={<h3 className="text-center">Not found 404</h3>}
        />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
