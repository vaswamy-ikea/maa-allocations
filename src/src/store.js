import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createRootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'remote-redux-devtools'
// import api from './restClients/api';
// import moment from 'moment/moment';
// import utilities from './utilities';
// import models from './models';
import { createBrowserHistory as createHistory } from 'history';
export const history = createHistory();


const middleware = applyMiddleware(
    thunk.withExtraArgument(),
    routerMiddleware(history)
);

const loggerMiddleware = applyMiddleware(
    createLogger({
        collapsed: (getState, action, logEntry) => !logEntry.error
    })
);

const store = createStore(
    createRootReducer(history),
     composeWithDevTools(middleware, loggerMiddleware),
     
);

export default store;
