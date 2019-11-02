const express = require('express');
const bodyParser = require("body-parser");
const admin = require('./routes/admin');
const course = require('./routes/course');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', admin);
app.use('/course', course);

app.listen( process.env.PORT || 8080, () => {
    console.log('Server is running.. on Port 8080');
});