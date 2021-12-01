import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import { useDispatch, useSelector } from "react-redux";

import Step1 from "./form/Step1";
import Step2 from "./form/Step2";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const navigation = [
    { name: "Dashboard", href: "/", current: false },
  ];
  return true ? (
    <>
      <Nav navigation = {navigation}/>
      <h2 className=" text-4xl grid justify-items-center mt-4 lg:mt-10">Checkout</h2>
      <div className="mt-4 lg:mt-14 mx-2 lg:mx-14 bg-white py-4 border-white rounded-lg mb-8">
        <Step1 />
      </div>
    </>
  ) : (
    <div>
      <Nav navigation = {navigation}/>
      <p className="mt-14 mx-14 bg-white py-4 border-white text-4xl rounded-lg grid grid-cols-1 justify-items-center">
        blekh{" "}
      </p>
    </div>
  );
};

export default Checkout;
