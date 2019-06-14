import React, { Component } from 'react';
import News from './News';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="col-md-8">
                    <h1>Home</h1>
                </div>
                <div className="col-md-4">
                    <News />
                </div>
            </div>
        );
    }
}

export default Home;