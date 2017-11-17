import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            addMovieInput: ""
        }
    }

    handleAddMovieInput = (e) => {
        this.setState({
            addMovieInput: e.target.value
        });
    }
    handleAddMovie = () => {
        this.props.onAddMovie(this.state.addMovieInput)
    }
    render(){
        return <div>
            <h1>Filmy do obejrzenia</h1>
            <div className="addPanel">
                <input 
                    type="text" 
                    className="addMovieInput"
                    value={this.state.addMovieInput} 
                    onChange={this.handleAddMovieInput}/>
                <button 
                    className="addMovie"
                    onClick={this.handleAddMovie}>
                    Dodaj
                </button>
            </div>
        </div>
    }
}

export {Header}