import mysql from "mysql";
import { config } from "./database_config.js";
import Promis from "promise";

var queries = {
  customers:
    "select * from (select * from customer natural join centralized_account where customer.Account_No=centralized_account.Account_No) as x natural join assigned_agent where x.Customer_ID=assigned_agent.Customer_ID and x.Account_No is not null;",
  getCustomer: "SELECT * FROM `customer` WHERE Customer_ID= ?;",
  agents: "SELECT * FROM `agent`",
  addCentralizedAccount:
    "INSERT INTO centralized_account(Account_No,Balance,Account_Type,Special_Request_Permission) VALUES(?,?,?,?);",
  addCustomer:
    "INSERT INTO customer(Name,Username,Password,Account_No,DOB,Phone_No,Email,Gender) VALUES(?,?,?,?,?,?,?,?);",
  addAssignedAgent:
    "INSERT INTO assigned_agent(Customer_ID,Agent_ID) VALUES((SELECT Customer_ID from customer ORDER BY Customer_ID DESC LIMIT 1),?);",
  getCustomerID:
    "SELECT Customer_ID from customer ORDER BY Customer_ID DESC LIMIT 1;",
  updateCustomer1:
    "UPDATE centralized_account SET Account_Type=? WHERE Account_No=?;",
  updateCustomer2:
    "UPDATE centralized_account SET Special_Request_Permission= ? WHERE Account_No= ?;",
  updateCustomer3: "UPDATE customer SET Password= ? WHERE Account_No= ?;",
  updateCustomer4: "UPDATE customer SET Email= ? WHERE Account_No= ?;",
  updateCustomer5: "UPDATE customer SET Phone_No= ? WHERE Account_No= ?;",
  updateCustomer6:
    "UPDATE assigned_agent SET Agent_ID= ? WHERE Customer_ID = ?;",
  deleteCustomer1: "DELETE FROM centralized_account WHERE Account_No=?;",
  deleteCustomer2: "DELETE FROM assigned_agent WHERE Customer_ID=?;",
  getFixedID: "select Customer_ID from fixed_deposit;",
  getFixedDetails:
    "select Account_No,Amount,Period,DateofDeposit,x.Customer_ID,x.Name from (select fixed_deposit.Account_No,Amount,Name,Phone_No,Period,DateofDeposit,customer.Customer_ID from customer inner join fixed_deposit on customer.Customer_ID=fixed_deposit.Customer_ID) as x inner join assigned_agent on x.Customer_ID=assigned_agent.Customer_ID;",
  createFixedAccount:
    "INSERT INTO fixed_deposit(Account_No,Customer_ID,Amount,Period,DateofDeposit) VALUES(?,?,?,?,?);",
  agents:
    "select   Agent_ID,y.Name as Agent_Name,NIC,DOB,Phone_No,Username,Password,Email,z.Name from (select x.Agent_ID,Name,NIC,DOB,Phone_No,Username,Password,Email,Customer_ID from assigned_agent right outer join (select * from agent) as x on x.Agent_ID=assigned_agent.Agent_ID) as y left outer join (select Customer_ID,Name from customer) as z on  y.Customer_ID=z.Customer_ID;",
  deleteAgent: "DELETE FROM agent WHERE Agent_ID=?;",
  addAgent:
    "INSERT INTO agent(Name,NIC,DOB,Phone_No,Email,Username,Password,Gender) VALUES(?,?,?,?,?,?,?,?);",
};

export function database(queryName, queryParams) {
  return new Promis(function (resolve, reject) {
    var con = mysql.createConnection(config);
    con.connect(function (err) {
      if (err) throw err;
      console.log(`Connected to mysql database: ${config.database}`);
    });
    con.query(queries[queryName], queryParams, function (err, result, fields) {
      if (err) {
        con.end();
        return reject(err);
      }
      con.end();
      resolve(JSON.parse(JSON.stringify(result)));
    });
  });
}
