import React from 'react';
import { 
    Link
} from 'react-router';

class Navigation extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return  <div>
            <ul className="navigation">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">O nas</Link>
            </li>
            <li>
                <Link to="/test">Test</Link>
            </li>
            </ul>

            {this.props.children}
        </div>
    }
}

export {Navigation}