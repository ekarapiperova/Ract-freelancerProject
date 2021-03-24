import  LinkItem  from '../LinkItem';
import {Link} from 'react-router-dom'
import style from './Header.module.css';
const Header=()=>{
    return(
        <nav className={style.navigation}>
        <ul>
        <img _ngcontent-webapp-c264="" alt="Freelancer logo" className="LogoImg Small" src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg"/>
          <Link to="/"><LinkItem>Home</LinkItem></Link>
          <Link to="/jobs"><LinkItem>Jobs</LinkItem></Link>
          <Link to="/profile"><LinkItem>Profile</LinkItem></Link>
       

        </ul>
      
      </nav>
    )
}
export default Header