const express = require('express');

const config = require("../knexfile.js");
const db = require("knex")(config.development)
// const {
//   getCustomers,
//   createCustomer,
//   getCustomer,
//   deleteCustomer,
//   updateCustomer,
// }  =  require("../controllers/customers.js");

const router = express.Router();

router.get('/',(req,res)=>{
    db.raw("SELECT * FROM customer").then(function(result){
        return res.send({data : result[0]})
    })
});

// router.post("/", createCustomer);

 router.get("/:id", (req,res)=>{
    db.raw("SELECT * FROM customer where Customer_ID=?",[req.params.id]).then(function(result){
        return res.send({data : result[0]})
    })
});


// router.delete("/:id", deleteCustomer);

// router.patch("/:id", updateCustomer);

module.exports = router;
