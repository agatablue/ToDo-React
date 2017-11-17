import React from 'react';
import {App} from './app.jsx';
import {About} from './about.jsx';
import {NotFound} from './notFound.jsx';
import {Test} from './test.jsx';
import {Navigation} from './navigation.jsx';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

class Routing extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return  <Router history={hashHistory}>
            <Route path='/' component={Navigation}>
                <IndexRoute component={App} />
                <Route path='/about' component={About}/>
                <Route path='/test' component={Test}/>
                <Route path='*' component={NotFound} />
            </Route>
            
        </Router>
    }
}

export {Routing}