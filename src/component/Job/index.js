import { Link } from 'react-router-dom'
import style from './Job.module.css'
const Job = ({id, title, category, money}) => {
    return (
        <div className={style.post}>
        <li className="Job">
             <p className="img"><img src="" alt="ima" /></p>
            <h3> {title}</h3>
        
            <p>Category: {category}</p>           
            <p className="monety">{money} $</p>
            <div className="job-info">
                <Link to="#"><button className="button"> Apply</button></Link>
                <Link to={`/jobs/details/${id}`}><button className="button">More Info</button></Link>

            </div>
        
        </li>
        </div>
    )
}
export default Job