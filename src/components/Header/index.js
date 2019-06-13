import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/coffee/list">
                    <span>List</span>
                </Link>
                <br/>
                <Link to="/coffee/create">
                    <span>Create</span>
                </Link>
                
            </div>
        );
    }
}

export default Header;