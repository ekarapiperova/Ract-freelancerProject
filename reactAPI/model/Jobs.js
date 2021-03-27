const mongoose = require('mongoose');
const {Schema,model:Model}=mongoose;
const{String,Number,ObjectId}=Schema.Types;

const JobSchema=new Schema({

    title:{
        type:String,
        required:true,
        unique:true

    },
    description:{
        type:String,
        required:true,
        maxlength:50

    },
    money:{
        type:Number,
        required:true,
        },
    
    toData:{
        
            type:String,
            required:true 
        
    },
    creator:{
        type:ObjectId,
            ref:'User'
    }

})
module.exports=new Model('Jobs',JobSchema)