import { useState,useEffect, useContext } from "react";
import isAuth from "../../isAuth";
import AuthContext from "../context/AuthContext";
import style from '../Job/Job.module.css'
import Form from "../JobForm";
const CreateJob=({history})=>{
    const {username} = useContext (AuthContext );

     const create=(title,description,money,catrgory,data,creator)=>{
        let job={
            title: title,
            description: description,
            money: money,
            category: catrgory,
            toData:data,
            creator:creator
        }
     
        return fetch('http://localhost:9999/job/',{
            method: 'POST',
            headers:{
                'Content-Type':   "application/json" 
            },
            body: JSON.stringify(job)
        })
       
    
    }
    const onCreateSubmit=(e)=>{
        e.preventDefault();        
        const {title,description,money,category,data}=e.target;
        create(title.value, description.value, money.value, category.value,data.value,username)
        .then(()=>history.push('/'))   
        .catch(err=>console.error(err))      
        

    }
    return(
        <Form
        type="Create"
        action={onCreateSubmit}     
         />

    )
    
}
export default isAuth( CreateJob)
