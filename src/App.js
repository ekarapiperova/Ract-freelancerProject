import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import {Router, Switch} from 'react-router'
import Jobs from './component/Jobs';

import style from './App.css'
import JobDetail from './component/JobDetail';
function App() {
  return (
    <div className={style.App}>
      
      <Header/>
     
        <Jobs/>
 
        
      <Footer/>
      
    </div>
  );
}

export default App;
