import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// redux
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import users from './store/reducers/usersReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    users:users,

})
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  , document.getElementById('root')
);

