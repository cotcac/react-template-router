import React, { Component } from 'react';
import {connect} from 'react-redux';
const mapStoreToPros = (store) =>{
    console.log(store);
    
    return {
        a: store.users.a
    }
}
class Users extends Component {
    render() {
        return (
            <div>
                <h1>Users</h1>
                <p>This is users routes</p>
                <span>A:{this.props.a}</span>
            </div>
        );
    }
}

export default connect(mapStoreToPros)(Users);