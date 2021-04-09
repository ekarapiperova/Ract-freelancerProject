import { useState,useEffect } from "react";
import isAuth from "../../isAuth";
import style from '../Job/Job.module.css'
import Form from '../JobForm/index'
const EditJob=({match,history})=>{

       
    const id=match.params.id;
    const getOne = (id) => {
        let url = `http://localhost:9999/job/${id}`
        
        return fetch(url)
            .then(res => res.json())
            .catch(error => console.log(error))
    }

    let [job, setJob] = useState({});
    useEffect(() => {

        getOne(id)
            .then(res => setJob(res));
    }, [match]);

     const edit=(title,description,money,catrgory,data)=>{
        let job={
            title: title,
            description: description,
            money: money,
            category: catrgory,
            toData:data,
            
        }
      
        return fetch(`http://localhost:9999/job/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type':   "application/json" 
            },
            body: JSON.stringify(job)
        })
    
    }
    const onSaveSubmit=(e)=>{
        
        const {title,description,money,category,data}=e.target;

        edit(title.value, description.value, money.value, category.value,data.value)
        .then(()=>
        {
            history.push(`/jobs/details/${id}`)
            return
        })
        
        

    }
    return(
        <Form
        type="Edit"
        action={onSaveSubmit}
        title={job.title}
        description={job.description}
        money={job.money}
        category={job.category}
        toData={job.toData}

         />
       
    )
    
}
export default isAuth( EditJob)
