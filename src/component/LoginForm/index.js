import {auth} from '../../utils/firebase'
const Login=({history})=>{

    const onLoginHandler=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);

        auth.signInWithEmailAndPassword(email,password)
        .then((userCredential)=>{
           // console.log(userCredential);
            history.push('/')
        })
    }

    return(
        <section className="login">
        <form onSubmit={onLoginHandler}>
            <fieldset>
                <legend>Login</legend>
                <p className="field">
                    <label htmlFor="email">email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="email" />
                        <span className="actions"></span>
                        <i className="fas fa-user"></i>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <span className="actions"></span>
                        <i className="fas fa-key"></i>
                    </span>
                </p>
                <input className="button" type="submit" className="submit" value="Login" />
            </fieldset>
        </form>
    </section>
    )

}

export default Login