import React from 'react';
import {MovieItem} from './movieItem.jsx'

class MovieList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        };
    }
  
    render(){
        console.log(this.state.items) //Dlaczego tutaj nie są widoczne filmy ?
        const items = this.state.items.map( (item, i) => {
            return <MovieItem
                title={item}
                key={i}
                labelId={`label-${i+1}`}
            />
        });
        return <ul>
            {items}
        </ul>;
    }
}

export {MovieList}