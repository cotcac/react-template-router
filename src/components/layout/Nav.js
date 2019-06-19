import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-reverse navbar-fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <NavLink className="navbar-brand" to="/">CONTEMI</NavLink>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li> <NavLink activeClassName="current" to="/about">About</NavLink> </li>
                            <li> <NavLink activeClassName="current" to="/users">Users</NavLink> </li>
                            <li> <NavLink activeClassName="current" to="/posts">Posts</NavLink> </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/sign-up"><span className="glyphicon glyphicon-user"></span> Sign Up</NavLink></li>
                            <li><NavLink to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Nav;