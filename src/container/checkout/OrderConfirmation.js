import React from "react";
import Nav from "../Nav/Nav";
import { useDispatch, useSelector } from "react-redux";

const OrderConfirmation = () => {
  const checkout = useSelector((state) => state.checkout);
  const navigation = [{ name: "Dashboard", href: "/", current: false }];
  return (
    <>
      <Nav navigation = {navigation}/>
      <h2 className=" text-4xl grid justify-items-center mt-10">
        Order Confirmed
      </h2>
      <div className="mt-14 mr-auto ml-auto bg-white py-4 border-white rounded-lg mb-8 w-1/2 p-4">
        <p className="text-2xl mb-4">
          Your order # {checkout.step3.id} has been successfully placed
        </p>
        <a className="text-blue-500 mt-8" href="/">
          Click here to return to the main page
        </a>
      </div>
    </>
  );
};

export default OrderConfirmation;
