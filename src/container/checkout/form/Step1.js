import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addDataToStep1 } from "../../../redux/checkout/actionCreator";

import { useHistory } from "react-router";

import Dots from "../Dots";

const Step1 = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const step1 = useSelector((state) => state.checkout.step1);

  const [address, setAddress] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (step1 != null) {
      console.log("in use Effect", step1)
      setAddress(step1.address)
      setName(step1.name)
      setPhone(step1.phone)
      setEmail(step1.email)
    }
    // eslint-disable-next-line
  }, []);


  const handleSubmit = (e) => {
    dispatch(addDataToStep1({
      address,
      name,
      phone,
      email
    }));
    history.push('/step2')
  };

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)

  }
  const handleAddressChange = (e) => {
    setAddress(e.target.value)

  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)

  }
  return (
    <>
      <div className="lg:grid lg:grid-cols-5 lg:gap-2 hidden lg:block">
        <div className="grid grid-cols-1  justify-items-center">
          <div className="w-20 h-20 bg-black rounded-full align flex items-center justify-center text-white">
            <p className="text-3xl">1</p>
          </div>
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" h-20 w-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="blue"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg> */}
          <p className="mt-2 text-2xl font-bold">Shipping Address</p>
        </div>
        <div className="flex items-center mr-auto ml-auto">
          {/* <div className="w-20 h-20 bg-blue-500 rounded-full ml-12 align flex items-center justify-center text-white">
          <p className="text-3xl">1</p>
        </div> */}
          <Dots />
        </div>

        <div className="grid grid-cols-1  justify-items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full align flex items-center justify-center text-white">
            <p className="text-3xl text-black">2</p>
          </div>
          <p className="mt-2 text-xl text-gray-400">Payment Method</p>
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
        <h2 className=" lg:text-2xl font-semibold mb-12">
          1. Please Provide Your Details
        </h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="grid grid-cols-1 my-4">
            <label className="text-2xl">Shipping Address</label>
            <input
              className="border rounded-lg text-xl p-2"
              type="textarea"
              placeholder="Complete Street Address"
              onChange = {(e) => {handleAddressChange(e)}}
              required 
              value = {address}

            />
          </div>

          <div className="grid grid-cols-1 my-4">
            <label className="text-2xl">Name</label>
            <input
              className="border rounded-lg text-xl p-2"
              type="text"
              placeholder="Full Name"
              onChange = {(e) => {handleNameChange(e)}}
              required
              value = {name}
            />
          </div>

          <div className="grid grid-cols-1 my-4">
            <label className="text-2xl">Email</label>
            <input
              className="border rounded-lg text-xl p-2"
              type="text"
              placeholder="Email Address"
              onChange = {(e) => {handleEmailChange(e)}}
              required 
              value = {email}

            />
          </div>
          <div className="grid grid-cols-1 my-4">
            <label className="text-2xl">Phone</label>
            <input
              className="border rounded-lg text-xl p-2"
              type="text"
              placeholder="03xxxxxxxxx"
              onChange = {(e) => {handlePhoneChange(e)}}
              required 
              value = {phone}

            />
          </div>
          <button className="mt-2 border rounded-lg p-2 bg-black text-white w-1/3 ml-2 transition duration-500 ease-in-out hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 mb-4">
            Save & Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Step1;
