import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';

const initialState = {
  items: [],
  total: 0,
};

// reducer 
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("Adding item to cart:", action.payload);
      // console.log("Current cart items:", state.items);
      // console.log("Current cart total:", state.total);
      return {
        ...state,
        items: [...state.items, action.payload],
        total: +state.total + +action.payload.price,
      };
    case REMOVE_FROM_CART:
      const itemToRemove = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - itemToRemove.price,
      };
    default:
      return state;
  }
};

export default cartReducer;
