import React from 'react';
import {App} from './app.jsx';
import {About} from './about.jsx';
import {NotFound} from './notFound.jsx';
import {Test} from './test.jsx';
import {Navigation} from './navigation.jsx';
import {
    HashRouter,
    Route,
    NavLink as Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

class Routing extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return  <HashRouter>
            <div>
              <Navigation />
             <Switch>
                <Route exact path='/' component={App} />
                <Route path='/about' component={About}/>
                <Route path='/test' component={Test}/>
                <Route path='*' component={NotFound} />
           </Switch>
           </div>
       </HashRouter>;
    }
}

export {Routing}