// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
// import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './components/App';
import InternalSaleSpace from './components/InternalSaleSpace'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SaleSpaceStructure from './components/SaleSpaceStructure'
import { browserHistory } from 'react-dom'
import './index.css';
import 'react-day-picker/lib/style.css';
import store, { history } from './store';
// import store from './store';
import actions from './actions';

// store.dispatch(actions.bootApplication());

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Provider store={store}>
//        <Router history={browserHistory}>
//        <div>
//          <Route exact path='/' component={(App)} />
//          <Route exact path='/internalSaleSpace' component={(InternalSaleSpace)} />
//          <Route exact path='/storeProperties' component={(SaleSpaceStructure)} />
//        </div>
//         </Router>
//     </Provider>,
//     document.getElementById('root')
// );



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
// import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

