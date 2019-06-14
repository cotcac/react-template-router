import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../store/actions/usersActions';
class Users extends Component {
    render() {
        return (
            <div>
                <h1>Users</h1>
                <p>This is users routes</p>
                <span>A:{this.props.a}</span>
                <button onClick={()=>{this.props.onAgeUp(2)}}>Age Up</button>
                {this.props.loading &&  <div>Loading...</div>}
            </div>
        );
    }
}
const mapStoreToPros = (store) =>{
    console.log(store);
    
    return {
        a: store.users.a,
        loading:store.users.loading
    }
}
const mapDispatchToPros = (dispatch) =>{
    return {
        onAgeUp: (val) => dispatch(actionCreator.ageUp(1))
    }
  }

export default connect(mapStoreToPros, mapDispatchToPros)(Users);