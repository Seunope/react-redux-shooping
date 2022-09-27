import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './product_reducer';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;
