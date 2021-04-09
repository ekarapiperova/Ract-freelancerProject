import style from '../ClientForm/index.module.css'
const Form=({type,action,title,description,money,toData,category})=>{
    return(
        <section className="edit">
        <form onSubmit={action}>
            <fieldset>
                <h2>{type} Job</h2>
        
                <p className={style.field}>
                    <label htmlFor="title">Name</label>
                  
                  
                    <span className="input" >
                        <input type="text" name="title" id="title" defaultValue={title}/>
                        <span className="actions"></span>
                    </span>
                </p>
                <p className={style.field}>
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea rows="4" cols="45" type="text" name="description" id="description"
                            defaultValue={description}></textarea>
                        <span className="actions"></span>
                    </span>
                </p>
                <p className={style.field}>
                    <label htmlFor="money">Money</label>
                    <span className="input">
                        <input type="text" name="money" id="money" defaultValue={money} />
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="data">Data</label>
                    <span className="input">
                        <input type="text" name="data" id="data" defaultValue={toData} />
                        <span className="actions"></span>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="category">Category</label>
                    <span className="input">
                        <select type="text" name="category" defaultValue={category}>
                            <option value="javascript">JavaScript</option>
                            <option value="c">C#</option>
                            <option value="html">HTML/CSS</option>
                            <option value="other">Other</option>
                        </select>
                        <span className="actions"></span>
                    </span>
                </p>
              
                <input className={style.button} type="submit"  value="Save" />
            </fieldset>
        </form>
    </section>

    
    )
}
export default Form