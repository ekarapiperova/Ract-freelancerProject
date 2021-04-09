
import Job from '../Job'
import { useEffect, useState,useContext } from 'react'
import isAuth from '../../isAuth'
import AuthContext from '../context/AuthContext';

const MyJobs=()=> {
    const {username} = useContext(AuthContext);
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
                <h1>{username}'s jobs</h1>
                   {jobs!=''?
                    jobs.map(x=>
                    <Job 
                    key={x._id}  
                    id={x._id}
                    title={x.title} 
                    description={x.description}                  
                    money={x.money}
                    category={x.category} 
                    toData={x.toData} 
                    creator={x.creator}                 
                    isCreator={true}
                  />):
                  <h1> You have no jobs</h1>
}
                   

                </ul>
         
        )
    }

export default isAuth(MyJobs)