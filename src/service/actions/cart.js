export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action of add to cart
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});


// Action of remove to cart
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});