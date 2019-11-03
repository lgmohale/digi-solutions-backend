const Sequelize = require('sequelize');
const db = require('../config');

module.exports = db.define('person', {
    person_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    person_name: {
        type: Sequelize.STRING,
        allownull: false
    },
    person_number: {
        type: Sequelize.STRING,
        allownull: false
    },
    person_surname: {
        type: Sequelize.STRING,
        allownull: false
    },
    person_email: {
        type: Sequelize.STRING,
        allownull: false
    },
    person_password: {
        type: Sequelize.STRING,
        allownull: false
    },
    created_at: { 
        type: Sequelize.DATE,
        allowNull: true, 
        defaultValue: Sequelize.NOW 
    },
     updated_at: {
        type: Sequelize.DATE,
        allowNull: true, 
        defaultValue: Sequelize.NOW 
     },
     
    }, 
    {
        timestamps: false,
        underscored: true,
        freezeTableName: true
    }
);

// module.exports = db.define('course', {
//     course_id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     course_name: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     course_aps: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     course_department: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     course_faculty: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     course_email: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     course_number: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     university_name: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     university_email: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     university_number: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     university_website: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     campus_name: {
//         type: Sequelize.STRING,
//         allownull: false
//     },
//     created_at: { 
//         type: Sequelize.DATE,
//         allowNull: true, 
//         defaultValue: Sequelize.NOW 
//     },
//      updated_at: {
//         type: Sequelize.DATE,
//         allowNull: true, 
//         defaultValue: Sequelize.NOW 
//      },
//     }, 
//     {
//         timestamps: false,
//         underscored: true,
//         freezeTableName: true
//     }
// );