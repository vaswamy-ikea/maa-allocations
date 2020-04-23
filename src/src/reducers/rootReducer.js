import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import internalSaleSpace from './internalSaleSpaceReducer';
import allocationView from './allocationViewReducer';
export default (history) => combineReducers({
    router: connectRouter(history),
    internalSaleSpace,
    allocationView
});
