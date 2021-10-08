import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/products/actionCreator";


export default () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    if (!products.fetched) {
      dispatch(getProducts());
    }
  }, [products.fetched]);
};
