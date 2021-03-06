const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'shhhh';
const express=require('express')


module.exports=(app)=>{
  
    app.use(cors({exposedHeaders:'Authorization'}));
    app.use(express.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(cookieParser(secret));
}