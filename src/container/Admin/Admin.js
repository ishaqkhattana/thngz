import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Amplify, { API, graphqlOperation, Storage } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createProduct } from "../../api/mutations";
import { listProducts } from "../../api/queries";
import config from "../../aws-exports";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const Admin = () => {
  const [Image, setImage] = useState(null);
  const [Image1, setImage1] = useState(null);
  const [Image2, setImage2] = useState(null);
  const [Image3, setImage3] = useState(null);
  const [Image4, setImage4] = useState(null);

  const [productImages, setproductImages] = useState([]);
  const [productDetails, setProductDetails] = useState({
    Title: "",
    Description: "",
    Image: "",
    Images: "",
    Price: "",
    Quantity: 0,
    Condition: 0,
    Size: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!productDetails.Title || !productDetails.Price) return;
      let imagesToUpload = JSON.stringify(productImages)
      console.log()
      let newProductDetails = {...productDetails, Images: imagesToUpload }
      const result = await API.graphql({
        query: createProduct,
        variables: { input: newProductDetails },
        authMode: "API_KEY",
      });
      console.log("hahah", result);
      setProductDetails({
        Title: "",
        Description: "",
        Image: "",
        Price: "",
        Quantity: "",
        Size: "",
        Condition: "",
        Images: ""
      });
    } catch (err) {
      console.log("error creating product:", err);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      // Upload the file to s3 with public access level.
      await Storage.put(key, file, {
        level: "public",
        contentType: file.type,
      });
      // Retrieve the uploaded file to display
      const image = await Storage.get(key, { level: "public" });
      console.log("image uploaded", image)
      console.log("product images", productImages)
      switch (productImages.length) {
        case 0:
          setImage(image);
          setproductImages([...productImages, url]);
          setProductDetails({ ...productDetails, Image: url });
          break;

        case 1:
          setImage1(image);
          setproductImages([...productImages, url]);
          break;

        case 2:
          setImage2(image);
          setproductImages([...productImages, url]);
          break;

        case 3:
          setImage3(image);
          setproductImages([...productImages, url]);
          break;

        case 4:
          setImage4(image);
          setproductImages([...productImages, url]);
          break;

        default:
          break;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="admin-wrapper">
      <AmplifyAuthenticator>
        <section>
          <header className="form-header">
            <h3>Add New Product</h3>
            <AmplifySignOut></AmplifySignOut>
          </header>
          <form className="form-wrapper" onSubmit={handleSubmit}>
            {/* <form className="form-wrapper"> */}
            <div className="form-image">
              {Image ? (
                <img
                  className="image-preview"
                  src={Image}
                  className="w-1/4"
                  alt=""
                />
              ) : (
                <input type="file" onChange={(e) => handleImageUpload(e)} />
              )}
            </div>
            <div className="form-image">
              {Image1 ? (
                <img
                  className="image-preview"
                  src={Image1}
                  className="w-1/4"
                  alt=""
                />
              ) : (
                <input type="file" onChange={(e) => handleImageUpload(e)} />
              )}
            </div>
            <div className="form-image">
              {Image2 ? (
                <img
                  className="image-preview"
                  src={Image2}
                  className="w-1/4"
                  alt=""
                />
              ) : (
                <input type="file" onChange={(e) => handleImageUpload(e)} />
              )}
            </div>
            <div className="form-image">
              {Image3 ? (
                <img
                  className="image-preview"
                  src={Image3}
                  className="w-1/4"
                  alt=""
                />
              ) : (
                <input type="file" onChange={(e) => handleImageUpload(e)} />
              )}
            </div>
            <div className="form-image">
              {Image4 ? (
                <img
                  className="image-preview"
                  src={Image4}
                  className="w-1/4"
                  alt=""
                />
              ) : (
                <input type="file" onChange={(e) => handleImageUpload(e)} />
              )}
            </div>
            <div className="form-fields">
              <div className="title-form">
                <p>
                  <label htmlFor="title">Title</label>
                </p>
                <p>
                  <input
                    name="title"
                    type="text"
                    placeholder="Type the title"
                    onChange={(e) => {
                      setProductDetails({
                        ...productDetails,
                        Title: e.target.value,
                      });
                      console.log(productDetails);
                    }}
                    required
                  />
                </p>
              </div>
              <div className="title-form">
                <p>
                  <label htmlFor="size">Size</label>
                </p>
                <p>
                  <input
                    name="size"
                    type="text"
                    placeholder="Type the Size"
                    onChange={(e) => {
                      setProductDetails({
                        ...productDetails,
                        Size: e.target.value,
                      });
                      console.log(productDetails);
                    }}
                    required
                  />
                </p>
              </div>
              <div className="title-form">
                <p>
                  <label htmlFor="condition">Condition</label>
                </p>
                <p>
                  <input
                    name="condition"
                    type="text"
                    placeholder="Type the Condition"
                    onChange={(e) => {
                      setProductDetails({
                        ...productDetails,
                        Condition: e.target.value,
                      });
                      console.log(productDetails);
                    }}
                    required
                  />
                </p>
              </div>
              <div className="description-form">
                <p>
                  <label htmlFor="description">Description</label>
                </p>
                <p>
                  <textarea
                    name="description"
                    type="text"
                    rows="8"
                    placeholder="Type the description of the product"
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        Description: e.target.value,
                      })
                    }
                    required
                  />
                </p>
              </div>
              <div className="price-form">
                <p>
                  <label htmlFor="price">Price (Rs)</label>
                  <input
                    name="price"
                    type="text"
                    placeholder="What is the Price of the product(Rs)"
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        Price: e.target.value,
                      })
                    }
                    required
                  />
                </p>
              </div>
              <div className="quantity-form">
                <p>
                  <label htmlFor="quantity">Quantity </label>
                  <input
                    name="quantity"
                    type="text"
                    placeholder="How many in stock"
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        Quantity: e.target.value,
                      })
                    }
                    required
                  />
                </p>
              </div>
              <div className="submit-form">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </AmplifyAuthenticator>
    </section>
  );
};

export default Admin;
