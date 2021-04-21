import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home/Home';
import ArizonaPackage from './ArizonaPackage/ArizonaPAckage';
import './App.css';

const App = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/arizona" component={ArizonaPackage}/>
            </Switch>
        </Router>
     );
}
 
export default App;