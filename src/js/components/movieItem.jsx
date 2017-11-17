import React from 'react';

class MovieItem extends React.Component{
 
    render(){
        const listItem =  <li>
            <input id={this.props.labelId} type='checkbox'/>
            <label htmlFor={this.props.labelId} >
                <h2>{this.props.title}</h2>
            </label>
        </li>

        return listItem;
    }
}

export {MovieItem}