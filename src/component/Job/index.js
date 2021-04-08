import { Link } from 'react-router-dom'
import style from './Job.module.css'
const Job = ({ id, title, category, money }) => {
    return (

        <li className="Job">
            <div className={style.post}>
                <div className={style.div}>
                    <h3> {title}</h3> 
                
                </div>               
                <p>Category: {category}</p>
                <p className="monety">{money} $</p>
                
               
               <Link to={`/job/detail/${id}`}><button className="button">More Info</button></Link>
                
            </div>
        </li>

    )
}
export default Job