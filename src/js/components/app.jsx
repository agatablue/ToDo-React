import React from 'react';
import {Header} from './header.jsx'
import {MovieList} from './movieList.jsx'


const items = ['Harry Poter','Hobbit',
'White Chicks'];

class App extends React.Component {
    render() {
        return <form className="tasks">
            <Header />
            <MovieList items={items} />
        </form>
    }
}

export {App}