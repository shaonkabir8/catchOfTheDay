import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App'
import StorePicker from './StorePicker'
import NotFound from './NotFound';
import FirstPage from './FirstPage';

const repo = `/${window.location.pathname.split('/')[1]}`

const Path = () => {
    return(
        <Router basename={repo}>
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