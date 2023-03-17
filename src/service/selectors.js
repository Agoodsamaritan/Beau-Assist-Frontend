import { createSelector } from 'reselect';

const selectProductState = state => state.products;

export const selectProducts = productId => createSelector(
  selectProductState,
  products => products.find(product => product.id === productId)
);

  