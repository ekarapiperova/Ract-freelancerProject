import {auth} from '../../utils/firebase'
import Form from '../Form';
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
       <Form 
                   type='Login'  
                   handler={onLoginHandler}  />
    </section>
    )

}

export default Login