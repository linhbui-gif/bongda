const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const userServer = require('./src/users/user.controller');
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users',userServer);
const PORT = process.env.PORT || 4000 ;
app.listen(PORT,()=>{
    console.log('App running in port : ',PORT);
})