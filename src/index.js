import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import MenuList from './components/menuList/MenuList';
import createLogger from 'redux-logger';

//SINGLE STORE TO SAVE ITEMS
const store = createStore(rootReducer, applyMiddleware(createLogger));

render( <Provider store={store}><MenuList /></Provider>, document.getElementById('root'));

export default store;