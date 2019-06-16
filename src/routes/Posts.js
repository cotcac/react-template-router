import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchAll} from '../store/actions/postsAction';
import { Link } from 'react-router-dom';
class Posts extends Component {
    componentWillMount(){
        this.props.fetchAll();
    }
    render() {
        const Posts = this.props.posts.posts.map(e =>(
            <div key={e.id}>
                <Link to={`/posts/${e.id}`} ><h3>{e.title}g</h3></Link>
                <p>{e.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {this.props.loading &&  <div>Loading...</div>}
                {Posts}
            </div>
        );
    }
}
const mapStoreToPros = (store) => {
    console.log(store);
    return {
        posts: store.posts,
        loading: store.posts.loading,
    }
}
export default connect(mapStoreToPros,{fetchAll})(Posts);