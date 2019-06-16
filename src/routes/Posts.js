import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchAll} from '../store/actions/postsAction';
import { Link } from 'react-router-dom';
class Posts extends Component {
    componentWillMount(){
        this.props.fetchAll();
    }
    render() {
        if(this.props.loading.error){
              return <div><p>Error {this.props.loading.errorStatus}</p></div>;
        }
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
    return {
        posts: store.posts,
        loading: store.loading,
    }
}
export default connect(mapStoreToPros,{fetchAll})(Posts);