import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { deleteCartItem, addToCart } from "../../redux/cart/actionCreator";

import { useCookies } from "react-cookie";

const Cart = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cart"]);

  const [total, setTotal] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const handleDeleteFromCart = (item) => {
    const newCart = cart.userCart.filter(
      (product) => product.id !== item.id
    );
    setCookie("cart", newCart, { path: "/", sameSite: "lax" });
    dispatch(deleteCartItem(item));
    let newTotal =
      total - Math.floor((item.Price - (20 / 100) * item.Price + 1) / 10) * 10;
    setTotal(newTotal);
  };

  useEffect(() => {
    console.log("cookies.cart", cookies.cart)
    if (cart.userCart.length == 0 && cookies.cart) {
      cookies.cart.forEach((item) => {
        dispatch(addToCart(item));

      })
    }
  }, []);

  useEffect(() => {
    const totalCalculator = async () => {
      let subTotal = 0;
      if (cart.userCart != null) {
        cart.userCart.forEach((item) => {
          subTotal +=
            Math.floor((item.Price - (20 / 100) * item.Price + 1) / 10) * 10;
        });
        setTotal(subTotal);
      }
    };

    totalCalculator();
  }, [cart]);

  const navigation = [{ name: "Dashboard", href: "/", current: false }];
  return cart.userCart.length != 0 ? (
    <>
      <Nav navigation={navigation} />
      <h2 className=" text-4xl grid justify-items-center mt-10">
        Shopping Cart
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mt-4 lg:mt-14 mx-2 lg:mx-14 bg-white py-4 border-white rounded-lg">
          <div className="grid grid-cols-3 m-5 bg-gray-100 p-4 border-white rounded-lg">
            <p className="text-base font-bold lg:text-3xl">Product</p>
            <p className="text-base font-bold lg:text-3xl grid justify-items-center">
              Price
            </p>
            <div></div>
          </div>
          {cart.userCart.map((item) => {
            return (
              <div className="grid grid-cols-3 m-5 p-4">
                <div className="flex-column">
                  <img
                    src={item.Image}
                    // style={{ maxWidth: "12rem" }}
                    className="border-white rounded-lg mb-2 w-full"
                  />
                  <p className="text-lg  lg:text-2xl mr-auto ml-auto items-center mt-auto mb-auto">
                    {item.Title}
                  </p>
                </div>
                <p className="text-base lg:text-2xl mr-auto ml-auto items-center mt-auto mb-auto text-blue-500">
                  Rs{" "}
                  {Math.floor((item.Price - (20 / 100) * item.Price + 1) / 10) *
                    10}
                </p>
                <button
                  className="ml-auto mt-auto mb-auto rounded-lg h-14 p-2 bg-white text-black transition duration-500 ease-in-out hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"
                  onClick={() => handleDeleteFromCart(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 lg:h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
          <hr className="w-3/4 mr-auto ml-auto text-bold" />
        </div>
        <div className="mt-4 lg:mt-14 mx-2 lg:mr-14 bg-white py-4 border-white rounded-lg mb-4">
          <h2 className=" text-3xl ml-4 mt-auto mb-auto mt-4">Order Summary</h2>
          {/* ORDER SUMMARY  */}
          <div className="bg-white ml-4 mt-4 mx-2 border-white rounded-lg">
            <div className="grid grid-cols-2 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700 text-xl">Subtotal:</p>
              <p className="text-xl ml-auto">Rs {total}</p>
              <p className="text-gray-700 text-xl mt-4">Shipping Charges:</p>
              <p className="text-xl mt-4 ml-auto">Free Shipping!</p>
              <div className="grid grid-cols-1">
                <p className="text-gray-700 text-xl mt-4">Promo Code</p>
                <div className="grid grid-cols-1 mt-2 lg:grid-cols-2">
                  <input
                    type="text"
                    className="border border-gray-200 text-xl rounded shadow-xl "
                  ></input>
                  <button className="border border-green-600 rounded mx-4 text-green-600 mt-2 lg:mt-0">
                    Apply Promo
                  </button>
                </div>
              </div>
              <div></div>
              <p className="text-2xl mt-4">Total: </p>
              <p className="text-2xl mt-4 ml-auto">Rs {total} </p>
            </div>
          </div>
          <button
            className=" ml-4 mt-2 border rounded-lg p-2 bg-black text-white w-1/4 transition duration-500 ease-in-out hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"
            onClick={() => history.push("/checkout")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  ) : (
    <div>
      <Nav navigation={navigation} />
      <p className="mt-14 mx-14 bg-white py-4 border-white lg:text-4xl rounded-lg grid grid-cols-1 justify-items-center">
        Your cart is empty :(({" "}
      </p>
    </div>
  );
};

export default Cart;
