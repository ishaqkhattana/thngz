import React, { lazy, useState, Suspense } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { useSelector } from "react-redux";
import { useLoadProducts } from "../../hooks";
import { searchProducts } from "../../api/queries";

// const Filters = lazy(() => import('./overview/Filters'));
// const Grid = lazy(() => import('./overview/Grid'));
// const List = lazy(() => import('./overview/List'));

const Products = () => {
  useLoadProducts();
  const [search, setSearch] = useState(null);
  const products = useSelector((state) => state.products.products);
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
      setSearch(result.data.searchProducts.items);
      console.log(search)
    }

    console.log(search);
  };
  return products ? (
    <div className="mt-20 ml-14">
      <h2 className=" text-3xl grid justify-items-center">Shop</h2>
      {/* Search Bar */}
      <div className="grid grid-cols-1 justify-items-center">
        <div className="w-1/2 ">
          <div className="bg-white flex items-center rounded-full shadow-xl">
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
      </div>
      {/* Searchbar Items */}
      <div className = "box-content w-1/2 grid ml-auto mr-auto mt-2">
        {search && search.length != 0
          ? search.map((item) => (
              <div className="grid grid-cols-1 justify-items-center mt-2 ">
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

      {/* Products  */}
      <div className="grid grid-cols-3 gap-4 mt-8 z-0">
        {products.map((product) => (
          <div className="w-3/4 border border-gray-50 border-opacity-80 rounded-lg p-4 shadow-lg transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
            <img className="border rounded-lg" src={product.Image} />
            <p className="font-medium text-2xl mt-4">{product.Title}</p>
            <p className="text-2xl text-gray-600">{product.Description}</p>
            <p className="font-medium text-2xl text-purple-600">
              Rs {product.Price}\-
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button className="mt-2 border rounded-lg p-2">
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
              <button className="mt-2 border rounded-lg p-2 bg-black text-white">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default Products;
