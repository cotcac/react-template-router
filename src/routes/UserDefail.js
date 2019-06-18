import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOne } from '../store/actions/usersActions';
import DivWithErrorHandling from '../hoc/DivWithErrorHandling';
class UserDefail extends Component {
    componentWillMount() {
        const userId = this.props.match.params.id;
        this.props.fetchOne(userId);
    }
    render() {
        return (
            <div className="col-md-12">
                <h1>Usaer Detail</h1>
                <DivWithErrorHandling loading={this.props.loading}>
                    <h1>{this.props.user.name}</h1>
                    <p> {this.props.user.email}</p>
                </DivWithErrorHandling>
            </div>
        );
    }
}
const mapStoreToPros = (store) => {
    return {
        user: store.users.user,
        loading: store.loading
    }
}

export default connect(mapStoreToPros, { fetchOne })(UserDefail);