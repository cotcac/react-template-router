import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// redux
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import users from './store/reducers/users';

const reducers = combineReducers({
    users:users,

})
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  , document.getElementById('root')
);

