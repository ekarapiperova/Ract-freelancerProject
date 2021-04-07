
import Job from '../Job'
import { useEffect, useState } from 'react'

const MyJobs=({username})=> {
    const getByCreator = (user) => {
        let url = `http://localhost:9999/job/myjobs/${user}`
    

        return fetch(url)
            .then(res => res.json())
            .catch(error => console.log(error))
    }

    let [jobs, setJobs] = useState([]);
    useEffect(() => {

        getByCreator(username)
            .then(res => setJobs(res))
    }, []);

    
    
        return(
           
            <ul>
                   {jobs.map(x=>
                    <Job 
                    key={x._id}  
                    id={x._id}
                    title={x.title}                   
                    money={x.money}
                    category={x.category}  
                    creator={x.creator}                 

                  />)
}
                </ul>
         
        )
    }

export default MyJobs