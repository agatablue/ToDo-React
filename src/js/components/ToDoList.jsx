import React from 'react';
import {ToDoItem} from './ToDoItem.jsx'

class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items
        };
    }
  
    render(){
        const items = this.state.items.map( (item, i) => {
            return <ToDoItem
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

export {ToDoList}