import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../store/actions/usersActions';
import { Link } from 'react-router-dom';
class Users extends Component {

    componentWillMount() {
        this.props.fetchAll()
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
                <Link to="/users-insert">Inset</Link>
                <p>This is users routes</p>
                <span>A:{this.props.a}</span>
                <button onClick={()=>{this.props.onAgeUp(2)}}>Age Up</button>
                {this.props.loading.loading &&  <div>Loading...</div>}
                {this.props.loading.error && <span>{this.props.loading.error} error</span>}
                {Users}
            </div>
        );
    }
}
const mapStoreToPros = (store) =>{
    console.log(store);
    
    return {
        a: store.users.a,
        users: store.users.users,
        error: store.errorHandlerReducer,
        loading:store.loading
    }
}
const mapDispatchToPros = (dispatch) =>{
    return {
        onAgeUp: (val) => dispatch(actionCreator.ageUp(1)),
        fetchAll: () => dispatch(actionCreator.fetchAll())
    }
  }

export default connect(mapStoreToPros, mapDispatchToPros)(Users);