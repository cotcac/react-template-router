import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userDetail } from '../store/actions/usersActions';
class UserDefail extends Component {
    componentWillMount() {
        const userId = this.props.match.params.id;
        this.props.userDetail(userId);
    }
    render() {

        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <p>Email: {this.props.user.email}</p>
            </div>
        );
    }
}
const mapStoreToPros = (store) => {
    console.log(store);
    return {
        users: store.users.users,
        user: store.users.user,
        loading: store.users.loading
    }
}

export default connect(mapStoreToPros, { userDetail })(UserDefail);