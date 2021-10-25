import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from '../redux/cart/actionCreator'


export default () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  useEffect(() => {
    if (!cart.fetched) {
      dispatch(getUserCart());
    }
  }, [cart.fetched]);
};
