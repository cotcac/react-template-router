import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-reverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li> <Link to="/about">About</Link> </li>
                        <li><a href="/">Page 2</a></li>
                        <li><a href="/">Page 3</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Nav;