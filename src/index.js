// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import Routes from './Routes';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

// const middleware = applyMiddleware(logger, thunk);

// const createStoreWithMiddleware = (createStore(middleware));

// ReactDOM.render(
// <Provider store={createStoreWithMiddleware}>
// 	<Routes />
// </Provider>
// , document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Routes from './Routes';
import reducers from './reducers';
import logger from "redux-logger";
import thunk from 'redux-thunk';

const middleware = applyMiddleware(logger, thunk);

const createStoreWithMiddleware = (createStore(reducers, middleware));

ReactDOM.render(
<Provider store={createStoreWithMiddleware}>
<Routes />
</Provider>
, document.getElementById('root'));