import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-reverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">CONTEMI</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li> <Link to="/about">About</Link> </li>
                        <li> <Link to="/users">Users</Link> </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Nav;