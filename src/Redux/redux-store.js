import { combineReducers, createStore } from'redux';
import LinksReducer from './Links-reducer';


let reducers = combineReducers({
    LinksReducer: LinksReducer
});

let store = createStore(reducers);

export default store;