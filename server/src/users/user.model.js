const db = require('./../database/connect');
const Sequelize = require('sequelize');
const userDb = db.define('users',{
    id:{
        type:Sequelize.DataTypes.CHAR,
        primaryKey:true
    },
    pw:{
        type:Sequelize.DataTypes.STRING 
    },
    email:{
        type:Sequelize.DataTypes.STRING 
    }
})
module.exports = userDb ;