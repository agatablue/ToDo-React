import React from 'react';
import ReactDOM from 'react-dom';
import {ToDoList} from './toDoList.jsx'
require('../sass/main.scss');

const items = ['Kupić bułki','Ugotować rosół',
    'Zrobić prezentację ze zdarzeń'];

ReactDOM.render(
    <ToDoList items={items} />,
    document.getElementById('app')
);