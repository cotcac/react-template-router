import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../store/actions/usersActions';
import { Link } from 'react-router-dom';
import DivWithErrorHandling from '../hoc/DivWithErrorHandling'
class Users extends Component {

    componentWillMount() {
        this.props.fetchAll()
    }

    render() {
        const Users = this.props.users.map(user => (
            <div key={user.id}>
                <Link to={`/users/${user.id}`} ><h3>{user.name}</h3></Link>
            </div>
        ))
        return (
            <div className="col-md-12">
                <h1>Users</h1>
                <DivWithErrorHandling loading={this.props.loading}>
                    <Link className="btn btn-success" to="/users-insert">Inset</Link>
                    {Users}
                </DivWithErrorHandling>
            </div>
        );
    }
}
const mapStoreToPros = (store) => {
    return {
        users: store.users.users,
        loading: store.loading
    }
}

export default connect(mapStoreToPros, { fetchAll })(Users);