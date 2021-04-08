import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from './index.module.css'
const JobDetail = ({ match }) => {
    const id=match.params.id;
    const getOne = (id) => {
        let url = `http://localhost:9999/job/${id}`
        console.log(match.params.id);

        return fetch(url)
            .then(res => res.json())
            .catch(error => console.log(error))
    }

    let [job, setJob] = useState({});
    useEffect(() => {

        getOne(id)
            .then(res => setJob(res));
    }, [match]);


 
    return (
       
        <div key={id} className={style.post}>
             
                <div className={style.div}>
                    <h3> {job.title}</h3> 
                </div>  
                <p>Description: {job.description}</p> 
                <p>Payment: {job.money}</p>            
                <p>Category: {job.category}</p>
                <p>For{ job.toData}</p>
                <p className="money">{job.money} $</p>
                 <p>{job.creator}</p>
               
               <Link to={`/job/edit/${id}`}><button className="button">Edit</button></Link>
               <Link to={`/job/delete/${id}`}><button className="button">Delete</button></Link>

                
         
        </div>


    )
}
export default JobDetail