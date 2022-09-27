import axios from 'axios';
import React, { useEffect, userEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';
import { setProducts } from '../redux/actions/product_actions';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((error) => console.log(error));
    dispatch(setProducts(response.data));
  };
  // console.log('prodyc', products);
  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};
export default ProductListing;
