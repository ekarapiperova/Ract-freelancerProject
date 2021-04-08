import LinkItem from '../LinkItem';
import { Link } from 'react-router-dom'
import style from './Header.module.css';
import { auth } from '../../utils/firebase';
import { useEffect } from 'react';
const Header = ({ isAuthenticated, username }) => {
  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    auth.currentUser.getIdToken()
      .then(function (idToken) {
        return fetch('http://localhost:5001', {
          headers: {
            'Authorization': idToken
          }
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });


  }, [isAuthenticated])

  return (
    <nav className={style.navigation}>
      <ul>
        <img _ngcontent-webapp-c264="" alt="Freelancer logo" className="LogoImg Small" src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg" />
       
        {isAuthenticated
          ? <div>
            <li>Welcome, {username}</li>
            <Link to="/"><LinkItem>Home</LinkItem></Link>
            <Link to="/job/myjobs"><LinkItem> My Jobs</LinkItem></Link>
            <Link to="/profile"><LinkItem>Profile</LinkItem></Link>
            <Link to="/logout"><LinkItem>Logout</LinkItem></Link>
          </div> :
          <div>
            <li>Welcome, Guest</li>
            <Link to="/"><LinkItem>Home</LinkItem></Link>
            <Link to="/register"><LinkItem>Register</LinkItem></Link>
            <Link to="/login"><LinkItem>Login</LinkItem></Link>
          </div>}




      </ul>

    </nav>
  )
}
export default Header