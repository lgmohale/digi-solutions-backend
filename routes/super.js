const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');
var db = require('../model');

route.post('/login', (req, res) =>{

    const { admin_name, admin_password } = req,body

    db.findOne({ where: {admin_email: admin_email}})
    .then(admin =>{
        if(!admin){
            
        }
    })
})