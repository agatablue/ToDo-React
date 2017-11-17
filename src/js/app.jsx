import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './components/header.jsx'
import {ToDoList} from './components/ToDoList.jsx'
require('../sass/main.scss');

const items = ['Harry Poter','Hobbit',
    'White Chicks'];

ReactDOM.render(
    <form className="tasks">
        <Header />
        <ToDoList items={items} />
    </form>,
    document.getElementById('app')
);