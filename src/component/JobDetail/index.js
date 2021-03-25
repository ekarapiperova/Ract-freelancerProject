import {useEffect,useState} from 'react'
const JobDetail=({match})=>{
    const getOne=(id)=>{
        let url=`http://localhost:9999/job/${id}`
    
        
         return fetch(url)
        .then(res=>res.json())
        .catch(error=>console.log(error))
    } 
    let[job,setjob]=useState({});
    useEffect(()=>{
        getOne(match.params.jobid)
        .then(res=>setjob(res));
    },[match]);
    
    
    
    
    return(
        <section class="detailsOtherjob">
                <h3>{job.title}</h3>
                <p>P{job.category}</p>
                <p>job money: {job.money}$ <a href="#"><button class="button"><i class="fas fa-heart"></i>
                            job</button></a>
                </p>
                <p class="img"><img src={job.imageURL}/></p>
                <p class="description">{job.toData}</p>
            </section>
        
    ) 
}
export default JobDetail