import {combineReducers} from 'redux';
import users from './usersReducer';
import posts from './postsReducer';

export default combineReducers({
  users,
  posts
})