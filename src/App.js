import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import {Router, Switch} from 'react-router'
import Jobs from './component/Jobs';

import style from './App.css'
function App() {
  return (
    <div className={style.App}>
      
      <Header/>
      <div className>
        <Jobs/>
      </div>
        
      <Footer/>
      
    </div>
  );
}

export default App;
