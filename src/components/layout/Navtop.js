import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class Navtop extends Component {
    render() {
        return (
            <div className="navbar-fixed-top">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button  type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <NavLink className="navbar-brand" to="/">WebSiteName</NavLink>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/users">Users</NavLink></li>
                            <li><NavLink to="/posts">Posts</NavLink></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
