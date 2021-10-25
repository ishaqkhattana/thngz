import React, { lazy, useState, Suspense, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useLoadProducts } from "../../hooks";
import { searchProducts } from "../../api/queries";
import { addProduct } from "../../redux/selectedProduct/actionCreator";
import { addToCart } from "../../redux/cart/actionCreator";

// const Filters = lazy(() => import('./overview/Filters'));
// const Grid = lazy(() => import('./overview/Grid'));
// const List = lazy(() => import('./overview/List'));

const Products = () => {
  const navigation = [{ name: "Dashboard", href: "/", current: true }];
  const dispatch = useDispatch();
  const history = useHistory();
  useLoadProducts();
  const [search, setSearch] = useState(null);
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.cart);
  console.log(products);
  const handleSearchChange = async (e) => {
    e.preventDefault();
    if (e.target.value.length <= 1) {
      setSearch([]);
    } else {
      const result = await API.graphql({
        query: searchProducts,
        variables: {
          filter: { Title: { matchPhrasePrefix: e.target.value } },
          limit: 3,
        },
        authMode: "API_KEY",
      });
      if (e.target.value.length >= 2) {
        setSearch(result.data.searchProducts.items);
      }
    }

    console.log(search);
  };

  const handleAddToCart = (product) => {
    if (cart.userCart.length == 0) {
      dispatch(addToCart(product));
      toast.success("Product Added to cart!");
    } else {
      const addToCartPromise = new Promise((resolve, reject) => {
        console.log("in promise");
        let resolveCheck = 0;
        cart.userCart.map((item) => {
          if (item.id == product.id) {
            console.log("rejected");
            reject();
          } else {
            resolveCheck++;
          }
        });
        console.log(resolveCheck, cart.userCart.length);
        if (resolveCheck == cart.userCart.length) {
          console.log("resolved");
          resolve();
        }
      });
      addToCartPromise
        .then(() => {
          dispatch(addToCart(product));
          toast.success("Product Added to cart!");
        })
        .catch(() => {
          toast.warn("Product Already Added");
        });
    }
  };

  const handleBuyNow = async (product) => {
    //Select the Product
    dispatch(addProduct(product));
    history.push("/checkout");
    //Add it to cart
    if (cart.userCart.length == 0) {
      dispatch(addToCart(product));
      toast.success("Product Added to cart!");
    } else {
      const addToCartPromise = new Promise((resolve, reject) => {
        console.log("in promise");
        let resolveCheck = 0;
        cart.userCart.map((item) => {
          if (item.id == product.id) {
            console.log("rejected");
            reject();
          } else {
            resolveCheck++;
          }
        });
        console.log(resolveCheck, cart.userCart.length);
        if (resolveCheck == cart.userCart.length) {
          console.log("resolved");
          resolve();
        }
      });
      addToCartPromise
        .then(() => {
          dispatch(addToCart(product));
          toast.success("Product Added to cart!");
        })
        .catch(() => {
          toast.warn("Product Already Added");
        });
    }
  };

  const handleGotoProduct = (product) => {
    dispatch(addProduct(product));
    history.push("/product");
  };
  return products ? (
    <>
      <ToastContainer />
      {/* SEARCHBAR */}
      <div className="grid grid-cols-1 justify-items-center mt-12">
        <div className="w-full lg:w-1/2 ">
          <div className="bg-white mx-4 flex items-center rounded-full shadow-xl">
            <input
              className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Search"
              onChange={(e) => handleSearchChange(e)}
            />
            <div className="p-4">
              <button className="bg-black text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Searchbar Items */}
        <div className=" box-content w-full grid ml-auto mr-auto mt-2 lg:w-1/2">
          {search && search.length != 0
            ? search.map((item) => (
                <div className="mx-4 lg:grid grid-cols-1 justify-items-center mt-2 ">
                  <div className="flex items-center justify-items-center border-black shadow-lg rounded-full bg-black text-white w-full transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none ease-in">
                    <img
                      className="border-black rounded-full ml-2 py-2"
                      src={item.Image}
                      style={{ maxWidth: "6rem" }}
                    />
                    <a
                      href=""
                      className="ml-8 w-100 justify-items-center grid text-xl "
                    >
                      {item.Title}
                    </a>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>

      <div className="mt-10 mx-14 bg-white py-4 border-white rounded-lg">
        {/* Products  */}
        <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 px-8 gap-8 mt-8 z-0 justify-items-center ">
          {products.map((product) => (
            <div className="w-full border border-gray-50 border-opacity-80 rounded-lg p-4 shadow-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none cursor-pointer">
              <a
                onClick={(e) => {
                  e.stopPropagation();
                  handleGotoProduct(product);
                }}
              >
                <img className="border rounded-lg" src={product.Image} />
                <p className="font-medium text-lg lg:text-2xl mt-4">{product.Title}</p>
                <p className="font-medium text-lg lg:text-2xl text-blue-500">
                  Rs {product.Price}\-
                </p>
                <p className="font-medium text-base lg:text-xl mt-0 lg:mt-4">
                  Size: {product.Size} EUR
                </p>
                <p className="font-medium text-base lg:text-xl">
                  Condition: {product.Condition}/10
                </p>
                {product.Quantity >= 1 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <button
                      className="mt-2 border rounded-lg p-2 text-black transition duration-500 ease-in-out hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
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
                      Add To Cart
                    </button>
                    <button
                      className="h-mt-2 border rounded-lg p-2 bg-black text-white transition duration-500 ease-in-out bg-black text-white hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBuyNow(product);
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                ) : (
                  <div className = "grid grid-cols-1 justify-items-center">
                    <p className = "mt-4 text-lg lg:text-2xl">Out of Stock :(</p>
                  </div>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : null;
};

export default Products;
