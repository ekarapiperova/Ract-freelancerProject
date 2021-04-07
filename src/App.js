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
function App() {

  const[user,setUser]=useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };


  return (
    <div className={style.App}>
      
      <Header/>
      
      <Switch>
        <Route path="/" exact component={Jobs}/>
      <Route path="/job/detail/:id" exact component={JobDetail}/>
      <Route path="/job/create" render={props => <CreateJob {...props} {...authInfo} />}/>

      <Route path="/login" exact component={Login}/>
      <Route path="/register" exact component={Register}/>

      <Route path="/profile" exact component={Profile}/>
      <Route path="/job/myjobs/" render={props => <MyJobs {...props} {...authInfo} />}/>




       
      <Route path="/logout" render={props=>{
        auth.signOut();
        return<Redirect to='/'/>

      }}/>


      </Switch>
        
      <Footer/>
      
    </div>
  );
}

export default App;
