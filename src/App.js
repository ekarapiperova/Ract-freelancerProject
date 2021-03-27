import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import {Route, Switch} from 'react-router'
import Jobs from './component/Jobs';

import style from './App.css'
import JobDetail from './component/JobDetail';
function App() {
  return (
    <div className={style.App}>
      
      <Header/>
      <Switch>
        <Route path="/" exact component={Jobs}/>
      <Route path="/job/detail/:id" exact component={JobDetail}/>

      </Switch>
        
      <Footer/>
      
    </div>
  );
}

export default App;
