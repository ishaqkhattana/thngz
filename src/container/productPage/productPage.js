import React, { Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../../redux/cart/actionCreator";

const ProductPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  console.log(product);
  const handleAddToCart = (product) => {
    if (cart.userCart.length == 0) {
      dispatch(addToCart(product));
      toast.success("Product Added to cart!");
    } else {
      const addToCartPromise = new Promise((resolve, reject) => {
        console.log("in promise")
        let resolveCheck = 0
        cart.userCart.map((item) => {
          if (item.id == product.id) {
            console.log("rejected")
            reject();
          } 
          else {
            resolveCheck++
          }
        });
        console.log(resolveCheck, cart.userCart.length)
        if(resolveCheck == cart.userCart.length){
          console.log("resolved")
          resolve()
        }
      });
      addToCartPromise.then(() => {
        dispatch(addToCart(product));
        toast.success("Product Added to cart!");
      }).catch(() => {
        toast.warn("Product Already Added");
      });
    }
  };

  const handleBuyNow = async (product) => {
    const buyNowPromise = new Promise((resolve, reject) => {
      cart.userCart.forEach((item) => {
        if (item.id == product.id) {
          reject()
        }
      })
      resolve()
    })

    buyNowPromise.then(() => {
      dispatch(addToCart(product));
      history.push("/checkout");
    }).catch(() => {
      history.push("/checkout");
    })
    
  };
  const navigation = [
    { name: "Dashboard", href: "/", current: false },
  ];
  return product.product != null ? (
    <>
      <ToastContainer />
      <Nav navigation = {navigation}/>
      <h2 className=" text-4xl grid justify-items-center mt-10">
        Product Details
      </h2>
      <div className="mt-14 mx-14 bg-white py-4 border-white rounded-lg">
        <div className="grid-cols-1 grid lg:grid-cols-2 p-8">
          <div className="border-white rounded-lg">
            <img
              className="w-3/4 border-black rounded-lg px-4 ml-auto mr-auto border-white py-2"
              src={product.product.Image}
            />
          </div>

          <div className="">
            <h2 className=" text-3xl grid mr-auto grid justify-items-center mb-2">{product.product.Title}</h2>
            <p className="font-medium text-2xl text-blue-500 mb-4">
              Rs {product.product.Price}\-
            </p>
            <p className="text-2xl text-gray-600 mb-4">
              {product.product.Description}
            </p>
            <p className="text-lg text-bold">
              Available:{" "}
              {product.product.Quantity > 0 ? (
                <span className="text-green-500 ml-4 text-2xl">
                  {" "}
                  {"In stock"}
                </span>
              ) : (
                <span className="text-red-500 ml-4 text-2xl">Out of stock</span>
              )}
            </p>
            <p className="text-lg text-bold">
              Shipping: <span className="text-sm lg:ml-5 text-2xl">Free</span>
            </p>
            {(product.product.Quantity >= 1) ? (
              <div className="flex mt-8">
              <button
                className=" w-full mt-2 border rounded-lg p-2 lg:w-1/3 transition duration-500 ease-in-out hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"
                onClick={() => {
                  handleAddToCart(product.product);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-6 mr-2 hidden lg:inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Add To Cart
              </button>
              <button onClick = {() => handleBuyNow(product.product)} className="w-full mt-2 border rounded-lg p-2 bg-black text-white lg:w-1/3 ml-2 transition duration-500 ease-in-out hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110">
                Buy Now
              </button>
            </div>
            ) : null}
          </div>
        </div>
        <hr className="w-3/4 mr-auto ml-auto text-bold" />
      </div>
    </>
  ) : null;
};

export default ProductPage;
