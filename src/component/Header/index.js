import LinkItem from '../LinkItem';
import { Link } from 'react-router-dom'
import style from './Header.module.css';
import { auth } from '../../utils/firebase';
import { useEffect ,useContext} from 'react';
import AuthContext from '../context/AuthContext';
const Header = () => {
  const { isAuthenticated, username }=useContext(AuthContext)
  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }


  }, [isAuthenticated])

  return (
    <nav className={style.navigation}>
      <ul>
       
       <img _ngcontent-webapp-c264="" alt="Freelancer logo" className="LogoImg Small" src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg" />
       
        {isAuthenticated
          ? <div>
            
            <Link to="/"><LinkItem>Home</LinkItem></Link>
            <Link to="/job/myjobs"><LinkItem> My Jobs</LinkItem></Link>
            <Link to="/profile"><LinkItem>Profile</LinkItem></Link>
            <Link to="/logout"><LinkItem>Logout</LinkItem></Link>
            <li className={style.listitem}>Welcome, {username}</li>
          </div> :
          <div>
           
            <Link to="/"><LinkItem>Home</LinkItem></Link>
            <Link to="/register"><LinkItem>Register</LinkItem></Link>
            <Link to="/login"><LinkItem>Login</LinkItem></Link> 
            <li>Welcome, Guest</li>
          </div>}

      </ul>

    </nav>
  )
}
export default Header