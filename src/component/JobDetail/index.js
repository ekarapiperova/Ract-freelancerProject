import { render } from '@testing-library/react';
import {useEffect,useState} from 'react'
const JobDetail=({match})=>{
    const getOne=(_id)=>{
        let url=`http://localhost:9999/job/${_id}`
        console.log(match.params.id);
        
         return fetch(url)
        .then(res=>res.json())
        .catch(error=>console.log(error))
    }
    
    let[job,setJob]=useState({});
    useEffect(()=>{
        
        getOne(match.params.id)
        .then(res=>setJob(res));
    },[match]);
    
    
   
    return(
        <section class="detailsOtherjob">
                <h3>{job.title}</h3>
                <p>{job.category}</p>
                <p>{job.money}$ </p>
              <p>{job.description}</p>
                <p >{job.toData}</p>
            </section>
        
    
    ) 
}
export default JobDetail