import React, { Component } from 'react';
import News from './News';
import Posts from './Posts';
import Users from './Users';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="col-md-6">
                    <h1>Home</h1>
                    <Posts />
                </div>
                <div className="col-md-6">
                    <News />
                    <Users />
                </div>
            </div>
        );
    }
}

export default Home;