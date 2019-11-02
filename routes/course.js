const express = require('express');
const route = express.Router();
const db = require('../model')

route.post('/add', (req, res) =>{

    const { course_name, course_aps, course_faculty, course_department, course_email, course_number, university_name, university_email, university_number, university_website, campus_name } = req.body

    db.create({
        course_name, 
        course_aps, 
        course_department, 
        course_faculty,
        course_email, 
        course_number, 
        university_name, 
        university_email, 
        university_number, 
        university_website, 
        campus_name})
    .then(course =>{
        console.log('course successefully added')
        res.send(course)
    })
    .catch(err =>{
        console.log('Oops, something went wrong while trying to add course', err)
        res.send(err)
    })
});

module.exports = route;