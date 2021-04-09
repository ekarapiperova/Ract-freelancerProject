import { useContext } from 'react';
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import MyJobs from '../MyJobs'
const Profile=()=>{
    const {username} = useContext (AuthContext);
    return(
        <div>
             <p>email:<span>{username}</span></p>
             <p></p>
              <Link to='/job/create'><button>Crate new job</button></Link>
              
      

        </div>
       
    )
}
export default Profile