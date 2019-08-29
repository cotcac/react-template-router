import React, { Component } from 'react'
import { connect } from 'react-redux';
import {insert} from '../store/actions/usersActions';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
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
            username: this.state.username,
            password: this.state.password
        }
        this.props.insert(post);
    }
    render() {
        return (
            <div className="col-md-12">
            <h1> Login</h1>
             <form onSubmit={this.handleSubmit}>
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
                     <label htmlFor="">Password</label>
                     <input
                         name="password"
                         className="form-control"
                         type="password" value={this.state.value}
                         onChange={this.handleChange} />
                 </div>
                 <button type="submit">Submit</button>

             </form>
         </div>
        )
    }
}
const mapStoreToPros = (store) => {
    console.log(store);
    return {
        users: store.users.users,
        loading: store.loading
    }
}
export default connect(mapStoreToPros, {insert})(Login);