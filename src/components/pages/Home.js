import React, { Component } from 'react';
import News from './News';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        HOme
                    </div>
                    <div className="col-md-4">
                        <News />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;