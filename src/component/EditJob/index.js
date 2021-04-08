import { useState,useEffect } from "react";

const EditJob=({match})=>{

       
    const id=match.params.id;
    const getOne = (id) => {
        let url = `http://localhost:9999/job/${id}`
        
        return fetch(url)
            .then(res => res.json())
            .catch(error => console.log(error))
    }

    let [job, setJob] = useState({});
    useEffect(() => {

        getOne(id)
            .then(res => setJob(res));
    }, [match]);

     const edit=(title,description,money,catrgory,data)=>{
        let job={
            title: title,
            description: description,
            money: money,
            category: catrgory,
            toData:data,
            
        }
      
        return fetch(`http://localhost:9999/job/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type':   "application/json" 
            },
            body: JSON.stringify(job)
        })
    
    }
    const onSaveSubmit=(e)=>{
        
        const {title,description,money,category,data}=e.target;

        edit(title.value, description.value, money.value, category.value,data.value)
        .then(()=>useState.history.push('/'))

    }
    return(
        <section className="edit">
        <form onSubmit={onSaveSubmit}>
            <fieldset>
                <h2>Edit Job</h2>
              <p>{}</p>
                <p className="field">
                    <label htmlFor="title">Name</label>
                  
                  
                    <span className="input">
                        <input type="text" name="title" id="title" defaultValue={job.title}/>
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea rows="4" cols="45" type="text" name="description" id="description"
                            defaultValue={job.description}></textarea>
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="money">Money</label>
                    <span className="input">
                        <input type="text" name="money" id="money" defaultValue={job.money} />
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="data">Data</label>
                    <span className="input">
                        <input type="text" name="data" id="data"defaultValue={job.toData} />
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="category">Category</label>
                    <span className="input">
                        <select type="text" name="category" defaultValue={job.category}>
                            <option value="java">Java</option>
                            <option value="javascript">JavaScript</option>
                            <option value="c">C#</option>
                            <option value="html">HTML/CSS</option>
                            <option value="other">Other</option>
                        </select>
                        <span className="actions"></span>
                    </span>
                </p>
              
                <input className="button submit" type="submit"  value="Save" />
            </fieldset>
        </form>
    </section>

    )
    
}
export default EditJob
