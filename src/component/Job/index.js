import { Link } from 'react-router-dom'
import style from './Job.module.css'
const Job = ({ id, title, category, money }) => {
    return (

        <li className="Job">
            <div className={style.post}>
                <div className={style.div}>
                    <h3> {title}</h3> 
                 <p className="img"><img src="" alt="ima" /></p>
                </div>
               
                

                <p>Category: {category}</p>
                <p className="monety">{money} $</p>
               
                    <Link to="#"><button className="button"> Apply</button></Link>
                    <Link to={`/jobs/details/${id}`}><button className="button">More Info</button></Link>

                
            </div>
        </li>

    )
}
export default Job