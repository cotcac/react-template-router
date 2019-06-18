import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-reverse">
                <div className="container">
                    <div className="row">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">CONTEMI</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li> <NavLink activeClassName="current" to="/about">About</NavLink> </li>
                        <li> <NavLink activeClassName="current" to="/users">Users</NavLink> </li>
                        <li> <NavLink activeClassName="current" to="/posts">Posts</NavLink> </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Nav;