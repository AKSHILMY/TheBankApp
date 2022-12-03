# TheBankApp

## Product Scope
The software being specified will operate on a mobile banking device.
It expands the bank's reach, allowing it to serve a wider number of customers, including those who 
live in places where there are no banks. These devices has very low expenses compared to the high 
cost of constructing a bank branch. Thus, they can be made in big quantities and delivered to hired 
agents from all across the country.

> **Micro Banking**: *it is a banking service provided to low-income or unemployed individuals with some 
limited services like depositing and withdrawing. This provides a way for small business to move 
ahead to the next level.*



## Product Perspective
<p align="center">
  <img src="https://user-images.githubusercontent.com/77115237/205448839-b069f49c-9489-41b5-9acb-823c5e7d8144.png" width="50%"
<p>


##  Product Functions

1.  Customer
    -  Withdraw
    - Deposit
    - Check the balance
    - Emergency withdrawal through the agent.

2. Mobile Device
    - Store the `transection` the local data base.
    - Update the `local databas`e to the `centralized database` after some amount of transection records.
    - Print a receipt as evidence for the `transaction`.

3. Bank
    - Creation and deletion of accounts
    - Compute interest 
    - Prepare a monthly report.


## ER Diagram
<p align="center">
  <img src="https://user-images.githubusercontent.com/77115237/205449050-aaafdeac-0102-461a-97c4-64cce7f745f1.png" width="70%"
<p>

    
## Hardware Interface
We should use a touch screen/ keypad for a user-friendly interaction with a customer and also 
simple GUIs that makes everyone possible to use the system with no prior knowledge and 
experience. Should have a good internet connection to connect with the central database.

### Interest calculation

All the `interest` calculating process are handled only by the central server. Interest rates and 
minimum required balance for Savings account vary on the plan. Plans are briefly listed below, 

```js
"Children"      : "12%",       // no minimum 
"Teen"          : "11%",       // 500 minimum 
"Adult (18+)"   : "10%",       // 1000 minimum 
"Senior (60+)"  : "13%",      // 1000 minimum 
"Joint"         : "7%",        // 5000 minimum
```

### Fixed Deposit (FD)
customer could start a Fixed Deposit (FD) with the bank by going to their main station. For a FB to function, a customer must have a Savings account. The FD plans 
are as follows, 

```json
"6 months"    : "13%"
"1 year"      : "14%"
"3 years"     : "15%"
```


### Project directory layout

    .
    ├── Backend Queries           # SQL queries used in projectd
    ├── Bankapp_database          # SQL databases
    ├── Connecting with database  # Configurations
    ├── TheBankOfPirates          # Android App
    ├── Web App                   # Web Application
        ├── client                # Front-end of the Application
        ├── server                # Back-end of the Application
    ├── Dump20220522.sql
    |__ login_system.zip          # apk file
    └── README.md


***
    
 ## Made 🤍 with
  - SQL <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" width="25px" />           # Relational Database
  - Java <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" width="25px" />            # Android application development
  - ReactJS <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" width="25px" />   # Front-end development
  - NodeJS <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" width="25px" />      # Backend development

  
