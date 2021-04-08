
import { useState, useEffect } from "react";

const Delete = ({ match }) => {


    const id = match.params.id;

    let [job, setJob] = useState({});
    useEffect(() => {
        // DELETE request using fetch inside useEffect React hook
      return fetch(`http://localhost:9999/job/${id}`, {
        method: 'DELETE',
        headers:{
            'Content-Type':   "application/json" 
        },
        body: JSON.stringify(job)
     },
      )
        
          .then(res => setJob(res));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [match]);



    return (
        <section className="delete">
            <h1>Delete{job}</h1>
        </section>

    )

}
export default Delete
