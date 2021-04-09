import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import {Redirect, Route, Switch} from 'react-router'
import Jobs from './component/Jobs';

import style from './App.css'
import JobDetail from './component/JobDetail';
import CreateJob from './component/CreateJob';
import Login from './component/LoginForm';
import { auth } from './utils/firebase';
import Register from './component/RegisterForm';
import { useEffect, useState } from 'react';
import Profile from './component/Profile';
import MyJobs from './component/MyJobs';
import EditJob from './component/EditJob';
import Delete from './component/Delete';
import CustomErrorBoundry from './component/CustomErrorBoundry';
import AuthContext from './component/context/AuthContext';
import isAuth from './isAuth';
function App() {

  const[user,setUser]=useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };
  const deleteJob=({id})=>{
    return fetch(`http://localhost:9999/job/${id}`,{
      method: 'DELETE',
      headers:{
          'Content-Type':   "application/json" 
      },
   
  })

  }


  return (
    <div className={style.App}>
     <AuthContext.Provider value={authInfo}>
             <Header />
     

      <CustomErrorBoundry>
      <Switch>
        <Route path="/" exact component={Jobs}/>
      <Route path="/job/detail/:id" exact component={JobDetail}/>

      <Route path="/job/edit/:id" component={isAuth(EditJob)}/>

      <Route path="/job/create" component={isAuth(CreateJob)}/>

      <Route path="/login" exact component={Login}/>
      <Route path="/register" exact component={Register}/>

      <Route path="/profile" component={isAuth(Profile)}/>
      <Route path="/job/myjobs/" component={isAuth(MyJobs)}/>


      <Route path="/job/delete/:id" component={isAuth(Delete)}/>


     
      <Route path="/logout" render={props=>{
        auth.signOut();
        return<Redirect to='/'/>

      }}/>


      </Switch>  
      </CustomErrorBoundry>
      
      <Footer/>
    </AuthContext.Provider>
    </div>

  );
}

export default App;
