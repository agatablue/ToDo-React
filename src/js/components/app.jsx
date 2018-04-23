import React from 'react';
import {Header} from './header.jsx';
import {MovieList} from './movieList.jsx';
import {About} from './about.jsx';

const items = ['Harry Poter','Hobbit',
'White Chicks'];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: items
        }
    }

    componentDidMount() {
        console.log('aaa')
        const url = "https://movielists-5884a.firebaseio.com/Movies.json";
        fetch(url).then(response => response.json() ).then( response => {
            console.log(response) // zobacz jak wygląda ten element
            this.setState({
                movies: response
            })
        })
    }

    addMovie = (movie) => {
        const obj = {
            title: movie,
            labelId: "label-"+this.state.movies.length
        }
        this.setState({
            movies: [...this.state.movies, obj]
        })
    }

    render() {
        return <form className="tasks">
            <Header onAddMovie={this.addMovie}/>
            <MovieList items={this.state.movies} />
        </form>
    }
}

export {App}