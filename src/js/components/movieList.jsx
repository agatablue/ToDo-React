import React from 'react';
import {MovieItem} from './movieItem.jsx'

class MovieList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        };
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({
            items: nextProps.items
        })
    }
    
    render(){
        console.log("this.state.items", this.state.items)
        const items = this.state.items.map( (item, i) => {
                return <MovieItem
                    title={item.title}
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