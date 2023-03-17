import { createSelector } from 'reselect';

const selectProducts = state => state.products;

export const selectProductById = productId =>
  createSelector(
    selectProducts,
    products => products.find(product => product.id === productId)
);
