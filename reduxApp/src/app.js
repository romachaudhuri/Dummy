"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';



import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';


import reducers from './reducers/index';

import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';


const applyMiddleware =applyMiddleware(logger());
const store = createStore(reducers, middleware);

import booksList from './components/pages/booksList';

render(
    <Provider store={store}>
    <booksList/>
    </Provider> , document.getElementById('app')
);

//store.dispatch(postBooks())