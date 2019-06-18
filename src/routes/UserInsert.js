import React, { Component } from 'react';
import { connect } from 'react-redux';
import {insert} from '../store/actions/usersActions';
class UserInsert extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            username:'',
            email:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
       this.setState({[e.target.name]:e.target.value}) 
    }

    handleSubmit(e) {
        e.preventDefault();
        const post = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
        }
        this.props.insert(post);
    }
    render() {
        return (
            <div className="col-md-12">
               <h1> Insert Users</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">name</label>
                        <input
                            name="name"
                            value={this.state.value}
                            onChange={this.handleChange}
                            className="form-control"
                            type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input
                            name="username"
                            className="form-control"
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input
                            name="email"
                            className="form-control"
                            type="text" value={this.state.value}
                            onChange={this.handleChange} />
                    </div>
                    <button type="submit">Submit</button>

                </form>
            </div>
        );
    }
}
const mapStoreToPros = (store) => {
    console.log(store);
    return {
        users: store.users.users,
        user: store.users.user,
        loading: store.loading
    }
}
export default connect(mapStoreToPros, {insert})(UserInsert);