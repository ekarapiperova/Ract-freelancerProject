import {Link} from 'react-router-dom'
import MyJobs from '../MyJobs'
const Profile=({username})=>{
    return(
        <div>
             <p>email:<span>{username}</span></p>
             <p></p>
              <Link to='/job/create'><button>Crate new job</button></Link>
              
      

        </div>
       
    )
}
export default Profile