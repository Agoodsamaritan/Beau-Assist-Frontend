import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cart';
import { configureStore } from '@reduxjs/toolkit';


// merge all the reducer
const rootReducer = combineReducers({
  cart: cartReducer,
});

//create a store
const store = configureStore({
  reducer: rootReducer,
});

export default store
