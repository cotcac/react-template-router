import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOne } from '../store/actions/usersActions';
class UserDefail extends Component {
    componentWillMount() {
        const userId = this.props.match.params.id;
        this.props.fetchOne(userId);
        console.log(this.props);

    }
    render() {
        if(this.props.loading.error){
            return <div><p>Error {this.props.loading.errorStatus}</p></div>;
      }

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
        user: store.users.user,
        loading: store.loading
    }
}

export default connect(mapStoreToPros, { fetchOne })(UserDefail);