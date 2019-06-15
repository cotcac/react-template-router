import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../store/actions/usersActions';
import { Link } from 'react-router-dom';
class Users extends Component {

    componentWillMount() {
        this.props.fetchUsers()
    }
 
    render() {
        const Users = this.props.users.map(user =>(
            <div key={user.id}>
                <Link to={`/users/${user.id}`} ><h3>{user.name}</h3></Link>
            </div>
        ))
        return (
            <div>
                <h1>Users</h1>
                <p>This is users routes</p>
                <span>A:{this.props.a}</span>
                <button onClick={()=>{this.props.onAgeUp(2)}}>Age Up</button>
                {this.props.loading &&  <div>Loading...</div>}
                {Users}
            </div>
        );
    }
}
const mapStoreToPros = (store) =>{
    return {
        a: store.users.a,
        users: store.users.users,
        loading:store.users.loading
    }
}
const mapDispatchToPros = (dispatch) =>{
    return {
        onAgeUp: (val) => dispatch(actionCreator.ageUp(1)),
        fetchUsers: () => dispatch(actionCreator.fetchUsers())
    }
  }

export default connect(mapStoreToPros, mapDispatchToPros)(Users);