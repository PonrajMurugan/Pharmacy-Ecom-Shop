import { createStore } from 'redux';
import cartReducer from '../Redux/cartReducers';

const store = createStore(cartReducer);

export default store;
