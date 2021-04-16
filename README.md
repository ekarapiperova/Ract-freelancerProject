## This is Freelancer App

local restApi for job data element with mongodb
for user authentication cloud firebase

# 1.Start New Application
npx create-react-app .
work on port 3000

# 2.Start REST Server
 cd reactAPi
 npm start
 work on port: 9999

# 3.Add Header and Footer component

add function components Header and Foooter

# 4.Create file jobsServices.js - all fetch request from back-end

getJobs(), getOne(id), getByCreator(user), create(...props),editJobs({..props}), deleteJob()
# 5. Create Job func Component / view one job info by id
# 6. Create home page/ class Component Jobs / view all jobs offer using Job Component
class Jobs extends React.Component{
    constructor(props){
        super(props)
        this.state={
            jobs:[]
        }
    }
       
    componentDidMount(){
        jobsService.getJobs()
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

# 7. Create My Jobs page / view jobs offer by creatir id with hooks

const MyJobs=()=> {
    const {username} = useContext(AuthContext);
    
    let [jobs, setJobs] = useState([]);
    useEffect(() => {

      jobsService.getByCreator(username)
            .then(res => setJobs(res))
    }, []);

    
    
        return(
           
            <ul>
                <div className={style.div}>
                    <h2>{username}'s jobs </h2>
                   <h3>Total: {jobs.length}</h3>
                
                </div>
                
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
                  <h1> {username} have no jobs</h1>
}
                   

                </ul>
         
        )
    }

# 8. Add firebase.js
$ npm init
$ npm install --save firebase
Config firebase for authentication - utils/firebase.js

# 9. Login and Register form
create func Component ClientForm- handler,type
crate Login and Register form with ClientForm

# 10. Login and Register form

