import {Link} from 'react-router-dom'
const Profile=({username})=>{
    return(
        <div>
             <h1>{username}</h1>
             <Link to='/job/create'>Crate new job</Link>
      

        </div>
       
    )
}
export default Profile