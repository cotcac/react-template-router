import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// redux
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import usersReducer from './store/reducers/usersReducer';
import postsReducer from './store/reducers/postsReducer';
import thunk from 'redux-thunk';
console.log(process.env.REACT_APP_BASE_URL,'API_URL');
const reducers = combineReducers({
    users:usersReducer,
    posts:postsReducer,
})
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  , document.getElementById('root')
);

