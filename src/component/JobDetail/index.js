import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Job from '../Job';
import style from './index.module.css'
const JobDetail = ({ match,username }) => {
    const id=match.params.id;
    const getOne = (id) => {
        let url = `http://localhost:9999/job/${id}`
        console.log(match.params.id);

        return fetch(url)
            .then(res => res.json())
            
    }

    let [job, setJob] = useState({});
    useEffect(() => {

        getOne(id)
            .then(res => setJob(res));
    }, [match]);


 
    return (
       
        <div>
             <ul>            
             <Job
                    key={job._id}  
                    id={job._id}
                    title={job.title}                   
                    money={job.money}
                    category={job.category}  
                    creator={job.creator}  
                    description={job.description}  
                    toData={job.toData}     
                    detail={false} 
                    isCreator={job.creator==username}       

                  />
               

                 </ul>

         <Link to='/' ><button className={style.button}>Back to All</button></Link>
         
        </div>


    )
}
export default JobDetail