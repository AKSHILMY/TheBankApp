import "./App.css";
import React, { useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import users from "./users.json";
import CustomerTable from "./components/customers/customerTable";
import AddCustomer from "./components/customers/addCustomer";
import CustomerDetails from "./components/customers/customerDetails";
import NavBar from "./components/header/navBar";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";
import axios from "axios";

function App() {
  const [customers, setCustomers] = useState([]);
  useEffect(()=>{
    axios.get('/customers')
  .then(result => {
    console.log(result.data);
    setCustomers(result.data.data);
  })

  },[])
  


  function addCustomerHandler(customer) {
    console.log(customer);
  }

  function updateCustomerHandler(customer) {
    console.log(customer);
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
            path="customerDetails/:id"
            element={
              <CustomerDetails
                customers={customers}
                updateCustomer={updateCustomerHandler}
              />
            }
          />
          <Route path="" element={<CustomerTable customers={customers} />} />
        </Route>
        <Route path="/" element={<Dashboard count={customers.length} />} />
        <Route
          path="*"
          element={<h3 className="text-center">Not found 404</h3>}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
