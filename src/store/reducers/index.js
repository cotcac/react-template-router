import {combineReducers} from 'redux';
import users from './usersReducer';
import posts from './postsReducer';
import loading from './loadingReducer';
export default combineReducers({
  users,
  posts,
  loading
})