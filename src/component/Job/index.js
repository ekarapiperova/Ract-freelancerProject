import { Link } from 'react-router-dom'
import style from './Job.module.css'
const Job = ({ id, title, category, money, creator, description, toData, detail,isCreator}) => {
    return (

        <li className="Job">

            <div className={style.post}>
                <div className={style.div}>
                    <h3> {title}</h3>
                </div>
                {description ? <p>Description:{description}</p> : ''}
                <p>Category: {category}</p>
                <p className="money">Payment: {money} $</p>
                {toData ? <p>To :{toData}</p> : ''}
                <p className="">Send email to: {creator} </p>

                {detail?
                 <Link to={`/job/detail/${id}`}><button className="button">More Info</button></Link>:''
                } 
                {isCreator?     
                  <div>   
                <Link to={`/job/edit/${id}`}><button className="button">Edit</button></Link>
                <Link to={`/job/delete/${id}`}><button className="button">Delete</button></Link>
                </div>
                :''}

            </div>
        </li>

    )
}
export default Job