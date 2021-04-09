import {auth} from '../../utils/firebase'
import Form from '../ClientForm';

const Register=({
    history
})=>{
    const onRegisterHandler=(e)=>{
        e.preventDefault();
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);

        auth.createUserWithEmailAndPassword(email,password)
        .then(userCredential=>{
            console.log('Reister');
            history.push('/')
        })
    }
    return(
        <section className="register">
               <Form 
                   type='Register'  
                   handler={onRegisterHandler}  />
            </section>

    )
}
export default Register