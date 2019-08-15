import React from 'react'
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/style.css'
import App from './components/App'
import StorePicker from './components/StorePicker'
import NotFound from './components/NotFound';
import FirstPage from './components/FirstPage';

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
render(<Path/> , document.querySelector('#root'))