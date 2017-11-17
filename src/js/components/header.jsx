import React from 'react';

class Header extends React.Component{
    render(){
        return <div>
            <h1>Filmy do obejrzenia</h1>
            <div className="addPanel">
                <input type="text" className="addMovieInput"/>
                <button className="addMovie">Dodaj</button>
            </div>
        </div>
    }
}

export {Header}