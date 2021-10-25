import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import { checkoutNow } from "../../../redux/checkout/actionCreator";

import { useHistory } from "react-router";

import Dots from "../Dots";
import Nav from "../../Nav/Nav";
import CompletedDots from "../CompletedDots";

const Step3 = () => {
  const [total, setTotal] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.userCart);
  const checkout = useSelector((state) => state.checkout);

  useEffect(() => {
    const totalCalculator = async () => {
      let subTotal = 0;
      if (cart != null) {
        cart.forEach((item) => {
          subTotal += item.Price;
        });
        setTotal(subTotal);
      }
    };
    console.log(cart);
    totalCalculator();
  }, []);

  const handleCheckout = () => {
    dispatch(checkoutNow({
      Cart: JSON.stringify(cart),
      Name: checkout.step1.name,
      Address: checkout.step1.address,
      Phone: checkout.step1.phone,
      Email: checkout.step1.email,
      Total: total,
      PaymentOption: checkout.step2.paymentOption
    }))
    history.push("/orderConfirmation")
  }
  const navigation = [
    { name: "Dashboard", href: "/", current: false },
  ];
  return (!checkout.step3IsFetching) ? (
    <>
      <ToastContainer />

      <Nav navigation = {navigation}/>
      <div className="mt-14 mx-2 lg:mx-14 bg-white py-4 border-white rounded-lg mb-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-2 hidden lg:block">
          <div className="grid grid-cols-1  justify-items-center">
            {/* <div className="w-20 h-20 bg-black rounded-full align flex items-center justify-center text-white">
            <p className="text-3xl">1</p>
          </div> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-20 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="mt-2 text-xl text-gray-400">Shipping Address</p>
          </div>
          <div className="flex items-center mr-auto ml-auto">
            {/* <div className="w-20 h-20 bg-blue-500 rounded-full ml-12 align flex items-center justify-center text-white">
          <p className="text-3xl">1</p>
        </div> */}
            <CompletedDots />
          </div>

          <div className="grid grid-cols-1  justify-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-20 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="mt-2 text-xl text-gray-400">Payment Method</p>
          </div>

          <div className="flex items-center mr-auto ml-auto">
            <CompletedDots />
          </div>

          <div className="grid grid-cols-1  justify-items-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full align flex items-center justify-center text-white">
              <p className="text-3xl text-black">3</p>
            </div>
            <p className="mt-2 text-2xl font-bold">Review Order</p>
          </div>
        </div>
        <h2 className=" lg:text-2xl font-semibold lg:mb-12 lg:ml-16 lg:mt-8 m-4 rounded-lg">
          3. Review and Confirm Order
        </h2>
        {/* MAIN DIV  */}
        <div className="grid lg:grid-cols-2 grid-cols-1 bg-gray-100">
          <div className="border border-gray-100 rounded-lg mt-12 mr-2">
            {/* SHIPPING DIV */}
            <div className="border border-white rounded-lg bg-white p-6 mb-4">
              <h2 className="ml-4 text-gray-600 text-2xl">
                Shipping Information
              </h2>
              <p className="ml-4 text-bold text-xl mt-4 mb-2">
                {checkout.step1.name}
              </p>
              <p className="ml-4 text-bold text-xl mb-2">
                Phone: {checkout.step1.phone}
              </p>
              <p className="ml-4 text-bold text-xl text-gray-500">
                {checkout.step1.address}
              </p>
            </div>
            <div className="border border-white rounded-lg bg-white my-4 p-6">
              <h2 className="ml-4 text-gray-600 text-2xl">Payment Method</h2>
              <p className=" ml-4 text-2xl mt-4">COD</p>
            </div>
            <div className="border border-white rounded-lg bg-white">
              {cart.map((item) => {
                return (
                  <div className="m-5 p-4">
                    <div className="flex">
                      <img
                        src={item.Image}
                        style={{ maxWidth: "10rem" }}
                        className="border-white rounded-lg"
                      />
                      <div className="grid grid-cols-1 mr-auto ml-auto">
                        <p className="text-2xl items-center mt-auto mb-auto">
                          {item.Title}
                        </p>
                        <p className="text-2xl items-center mt-auto mb-auto text-blue-500">
                          Rs {item.Price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <button
                className="mb-4 ml-8 mt-2 border rounded-lg p-2 bg-black text-white lg:w-1/4 transition duration-500 ease-in-out hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"
                onClick={() => {
                  history.push("/cart");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ display: "inline" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Edit Cart
              </button>
            </div>
          </div>
          {/* Order Summary */}

          <div className="bg-white ml-auto mt-12 mr-auto border-white rounded-lg ml-2">
            <h2 className=" text-2xl mt-8 font-semibold grid grid-cols-1 justify-items-center">
              Order Summary
            </h2>
            <div className="grid grid-cols-2 p-4">
              <p className="text-gray-700 text-xl">Subtotal:</p>
              <p className="text-xl ml-auto">Rs {total}</p>
              <p className="text-gray-700 text-xl mt-4">Shipping Charges:</p>
              <p className="text-xl mt-4 ml-auto">Free Shipping!</p>
              <div className="grid grid-cols-1">
                <p className="text-gray-700 text-xl mt-4">Promo Code</p>
                <div className="grid grid-cols-2 mt-2">
                  <input
                    type="text"
                    className="border border-gray-200 text-xl rounded shadow-xl "
                  ></input>
                  <button className="border border-green-600 rounded mx-4 text-green-600">
                    Apply Promo
                  </button>
                </div>
              </div>
              <div></div>
              <p className="text-2xl mt-4">Total: </p>
              <p className="text-2xl mt-4 ml-auto">Rs {total} </p>
            </div>
            <div className="">
            <button
                className="mt-2 mx-4 border rounded-lg p-2 bg-black text-white w-1/4 transition duration-500 ease-in-out hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"
                onClick={() => {
                    history.push('/step2')
                }}
              >
                Previous
              </button>
              <button
                className=" mx-4 mt-2 border rounded-lg p-2 bg-black text-white w-1/3 transition duration-500 ease-in-out hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"
                onClick={() => handleCheckout()}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Step3;
