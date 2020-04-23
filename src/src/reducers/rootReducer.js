import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import internalSaleSpace from './internalSaleSpaceReducer';
export default (history) => combineReducers({
    router: connectRouter(history),
    internalSaleSpace
});
