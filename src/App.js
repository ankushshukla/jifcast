import React, {Component} from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';
/*------ Pages-----*/
import Home from './component/Home';
import Second from './component/Second';
import ScrollToTopRoute from './ScrollToTopRoute';

class App extends Component{
  render(){
    return(
        <Router>
           <Switch>
             <ScrollToTopRoute exact={true} path={'/'} component={Home} />
             <ScrollToTopRoute exact={true} path={'/second'} component={Second} />
             <Route path='/amazon' component={()=>{
               window.location.href="https://amazon.com";
               return null;
             }} />
           </Switch>
        </Router>
    );
  }
}

export default App;

