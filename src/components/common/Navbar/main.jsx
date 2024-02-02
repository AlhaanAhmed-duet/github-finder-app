/* Personally I use Bootstrap Icons/svg */

import React from 'react';
import './style.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <div className="logo"><i className="bi bi-github"></i> Github Finder App</div>
                    <div className="container-form">
                    <input id="search" type='text' placeholder='Search Users'></input>
                    <button id="search-action">Search</button>
                    </div>
                    
                </div>
            </nav>
        )
    }
}

export default Navbar;