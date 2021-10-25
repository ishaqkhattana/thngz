import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addDataToStep2 } from "../../../redux/checkout/actionCreator";

import { useHistory } from "react-router";

import Dots from "../Dots";
import Nav from "../../Nav/Nav";
import CompletedDots from "../CompletedDots";

const Step2 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.checkout);

  const [paymentOption, setPaymentOption] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addDataToStep2({
        paymentOption,
      })
    );
    history.push("/step3");
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    history.push("/checkout");
  };

  const handlePaymentOptionChange = (e) => {
    e.preventDefault();
    var element = document.getElementById("COD");
    element.classList.add("bg-blue-500");
    element.classList.add("border-white");
    element.classList.add("text-white");
    setPaymentOption("Cash On Delivery");
  };

  useEffect(() => {
    if (checkout.step2 != null) {
      var element = document.getElementById("COD");
      element.classList.add("bg-blue-500");
      element.classList.add("border-white");
      element.classList.add("text-white");
    }
  }, []);

  const navigation = [{ name: "Dashboard", href: "/", current: false }];
  return (
    <>
      <Nav navigation={navigation} />
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
            <div className="w-20 h-20 bg-gray-200 rounded-full align flex items-center justify-center text-white">
              <p className="text-3xl text-black">2</p>
            </div>
            <p className="mt-2 text-2xl font-bold">Payment Method</p>
          </div>

          <div className="flex items-center mr-auto ml-auto">
            <Dots />
          </div>

          <div className="grid grid-cols-1  justify-items-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full align flex items-center justify-center text-white">
              <p className="text-3xl text-black">3</p>
            </div>
            <p className="mt-2 text-xl text-gray-400">Review Order</p>
          </div>
        </div>

        {/* FORM */}
        <div className="lg:ml-52 lg:mt-20 p-2 lg:w-1/2">
          <h2 className=" lg:text-2xl font-semibold mb-4 lg:mb-12">
            2. Please Choose a Payment Method
          </h2>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="flex">
              <button
                className="border rounded-lg text-xl p-2"
                id="COD"
                onClick={(e) => handlePaymentOptionChange(e)}
              >
                Cash on Delivery
              </button>
            </div>

            <button
              className="mt-8 border rounded-lg p-2 bg-black text-white w-1/3 ml-2 transition duration-500 ease-in-out hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 mb-4"
              onClick={(e) => {
                handlePrevious(e);
              }}
            >
              Previous
            </button>
            <button className="mt-2 border rounded-lg p-2 bg-black text-white w-1/3 ml-2 transition duration-500 ease-in-out hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 mb-4">
              Save & Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Step2;
