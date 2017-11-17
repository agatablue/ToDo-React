import React from 'react';
import ReactDOM from 'react-dom';
import {Routing} from './components/routing.jsx'

require('../sass/main.scss');

ReactDOM.render(
    <Routing/>,
    document.getElementById('app')
);