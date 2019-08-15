import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App'
import StorePicker from './StorePicker'
import NotFound from './NotFound';
import FirstPage from './FirstPage';

const Path = () => {
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={StorePicker}/>
                    <Route path="/store/:storeId" component={FirstPage} />
                    <Route path="/item/:storeId" component={App} />
                    <Route  component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
}


















export default Path;