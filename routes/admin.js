const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');
var db = require('../model');

// super admin adding admin
route.post('/add', (req, res) =>{

    const { person_name, person_surname, person_email, person_number, person_password } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(person_password, salt, (err, hash) => {
        
            const person_password = hash
            
            db.findOne({where: {person_email: person_email}})
            .then(admin =>{
                if(!admin){
                    db.create({
                        person_name,
                        person_surname,
                        person_email,
                        person_password,
                        person_number
                    })
                    .then(admin =>{
                        res.json({
                            message: 'new user successfully registered'
                        })
                        console.log('New user: ', admin)
                    })
                    .catch(err =>{
                        res.json({
                            message: 'User could not be added'
                        })
                        console.log('Oops something went wrong while registaring new user: ', err)
                    })
                }
                else{
                    res.json({
                        message: 'Email already exists, please log in'
                    })
                    console.log(admin.person_email, ' already exists')
                }
            })
        })
    })
});

module.exports = route;