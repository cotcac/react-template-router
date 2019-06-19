import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAll } from '../store/actions/postsAction';
import { Link } from 'react-router-dom';

import DivWithErrorHandling from '../hoc/DivWithErrorHandling';
class Posts extends Component {
    componentWillMount() {
        this.props.fetchAll();
    }
    render() {

        const Posts = this.props.posts.posts.map(e => (
            <div key={e.id}>
                <Link to={`/posts/${e.id}`} ><h3>{e.title}</h3></Link>
                <p>{e.body}</p>
            </div>
        ))
        return (
            <div className="col-md-12">
                <h1>Posts</h1>
                <DivWithErrorHandling loading={this.props.loading}>
                    {Posts}
                </DivWithErrorHandling>
            </div>
        );
    }
}
const mapStoreToPros = (store) => {
    const loading = {
        loading: store.posts.loading,
        error: store.posts.error
    }
    return {
        posts: store.posts,
        loading: loading,
    }
}
export default connect(mapStoreToPros, { fetchAll })(Posts);