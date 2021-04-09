import { useState,useEffect, useContext } from "react";
import isAuth from "../../isAuth";
import AuthContext from "../context/AuthContext";
import style from '../Job/Job.module.css'
import Form from "../JobForm";
const CreateJob=()=>{
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
        
        const {title,description,money,category,data}=e.target;

        create(title.value, description.value, money.value, category.value,data.value,username)
        .then(()=>useState.history.push('/job/myjobs'))
        

    }
    return(
        <Form
        type="Create"
        action={onCreateSubmit}     
         />

    )
    
}
export default isAuth( CreateJob)
