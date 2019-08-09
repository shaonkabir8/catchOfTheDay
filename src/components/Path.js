import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App'
import StorePicker from './components/StorePicker'
import NotFound from './components/NotFound';

const Path = () => {
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={StorePicker}/>
                    <Route  path="/store/storeId" component={App}/>
                    <Route  component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Path;