import { useState,useEffect } from "react";

const CreateJob=({username})=>{

     const create=(title,description,money,catrgory,data,creator)=>{
        let job={
            title: title,
            description: description,
            money: money,
            category: catrgory,
            toData:data,
            creator:creator
        }
     
        return fetch('http://localhost:9999/job/',{
            method: 'POST',
            headers:{
                'Content-Type':   "application/json" 
            },
            body: JSON.stringify(job)
        })
       
    
    }
    const onCreateSubmit=(e)=>{
        
        const {title,description,money,category,data}=e.target;

        create(title.value, description.value, money.value, category.value,data.value,username)
        .then(()=>useState.history.push('/'))
        

    }
    return(
        <section className="create">
        <form onSubmit={onCreateSubmit}>
            <fieldset>
                <h2>Create Job</h2>
            
                <p className="field">
                    <label htmlFor="title">Title</label>
                    <span className="input">
                        <input type="text" name="title" id="title" placeholder="title" />
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea rows="4" cols="45" type="text" name="description" id="description"
                            placeholder="Description"></textarea>
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="money">Money</label>
                    <span className="input">
                        <input type="text" name="money" id="money" placeholder="money" />
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="data">To data</label>
                    <span className="input">
                        <input type="text" name="data" id="data" placeholder="data" />
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="category">Category</label>
                    <span className="input">
                        <select type="text" name="category">
                            <option value="java">Java</option>
                            <option value="javascript">JavaScript</option>
                            <option value="c">C#</option>
                            <option value="html">HTML/CSS</option>
                            <option value="other">Other</option>
                        </select>
                        <span className="actions"></span>
                    </span>
                </p>
              
                <input className="button submit" type="submit"  value="Add Job" />
            </fieldset>
        </form>
    </section>

    )
    
}
export default CreateJob
