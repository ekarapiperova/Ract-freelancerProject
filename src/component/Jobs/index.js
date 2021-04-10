import React from 'react'
import Job from '../Job'

import style from './Jobs.index.css'
class Jobs extends React.Component{
    constructor(props){
        super(props)
        this.state={
            jobs:[]
        }
    }
    getJobs=()=>{
        let url=`http://localhost:9999/job`    
        return fetch(url)
       .then(res=>res.json())
       .catch(error=>console.log(error))

    }
    
    componentDidMount(){
        this.getJobs()
        .then(res=>this.setState({jobs:res}))
    }
    
    render(){
        return(
            <div className={style.jobslist}>
                <h1 className={style.h1}>All Jobs</h1>
            <ul>
                   {this.state.jobs.map(x=>
                    <Job 
                    key={x._id}  
                    id={x._id}
                    title={x.title}                   
                    money={x.money}
                    category={x.category}  
                    creator={x.creator} 
                    detail={true}                

                  />)}
                   
                </ul>
         </div>
        )
    }
}
export default Jobs