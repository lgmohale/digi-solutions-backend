const express = require('express');
const route = express.Router();
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('../model')


//adding course ti the dababse
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

//displaying courses from the databas
route.get('/course', (req, res) =>{
    //do some stuff
    db.findAll()
    .then(course =>{
        console.log('course:', course)
        res.send(course)
    })
    .catch(err =>{
        console.log("Oops, something went wrong whiletrying to load courses: ", err)
    })
})

//find courses based on the aps
route.get('/search', (req, res) =>{

    let { aps_score } = req.body;

    db.findAll({ where: { course_aps: { [Op.gte]:aps_score} } })
    .then(results => {
        res.send(results);
        console.log(results)
    })
    .catch(err =>{
        res.send(err);
    })
})

//delete course form the databse
route.delete('/delete', (req, res) =>{
    //do some stuff here
    const { id } = req.body

    db.destroy({ where: {course_id: id}})
    .then(results =>{
        res.redirect(course)
        console.log('course successully deleted', results)
    })
    .catch(err =>{
        res.send(err)
    })

})

module.exports = route;