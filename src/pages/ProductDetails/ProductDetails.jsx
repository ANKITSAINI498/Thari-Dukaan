import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaStar,
  FaHeart,
  FaShoppingCart,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/cartSlice";
import { addToWishlist } from "../../redux/wishlistSlice";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./ProductDetails.css";

function ProductDetails() {

  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState("");
  const [relatedProducts, setRelatedProducts] =
    useState([]);

  async function fetchProduct() {

    const response = await axios.get(
      `https://dummyjson.com/products/${id}`
    );

    setProduct(response.data);

    setMainImage(
      response.data.thumbnail
    );

    saveRecentlyViewed(
      response.data
    );

    fetchRelated(
      response.data.category
    );
  }

  async function fetchRelated(
    category
  ) {

    const response =
      await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );

    setRelatedProducts(
      response.data.products
    );
  }

  function saveRecentlyViewed(
    item
  ) {

    let viewed =
      JSON.parse(
        localStorage.getItem(
          "recentProducts"
        )
      ) || [];

    viewed = viewed.filter(
      (p) => p.id !== item.id
    );

    viewed.unshift(item);

    viewed = viewed.slice(0, 8);

    localStorage.setItem(
      "recentProducts",
      JSON.stringify(viewed)
    );
  }

  function handleAddToCart() {

    const currentUser =
      JSON.parse(
        localStorage.getItem(
          "currentUser"
        )
      );

    if (!currentUser) {
      alert("Please Login First");
      return;
    }

    dispatch(addToCart(product));

    alert(
      "Added To Cart"
    );
  }

  function handleWishlist() {

    const currentUser =
      JSON.parse(
        localStorage.getItem(
          "currentUser"
        )
      );

    if (!currentUser) {
      alert("Please Login First");
      return;
    }

    dispatch(
      addToWishlist(product)
    );

    alert(
      "Added To Wishlist"
    );
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <div className="row">


          <div className="col-lg-6">

            <div className="main-image-box">

              <img
                src={mainImage}
                alt=""
                className="main-image"
              />

            </div>

            <div className="gallery-box">

              {product.images?.map(
                (img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() =>
                      setMainImage(img)
                    }
                  />
                )
              )}

            </div>

          </div>


          <div className="col-lg-6">

            <h2 className="fw-bold">
              {product.title}
            </h2>

            <p className="text-muted">
              Brand:
              {" "}
              {product.brand}
            </p>

            <div className="rating-row">

              <span className="badge bg-success">

                <FaStar />

                {" "}
                {product.rating}

              </span>

              <span>
                Stock:
                {" "}
                {product.stock}
              </span>

            </div>

            <h2 className="price">

              ₹
              {(
                product.price *
                83
              ).toFixed(0)}

            </h2>

            <h5 className="discount">

              {product.discountPercentage}
              % OFF

            </h5>

            <p className="description">

              {product.description}

            </p>

            <div className="d-flex gap-3 mt-4">

              <button
                className="btn btn-warning btn-lg"
                onClick={
                  handleAddToCart
                }
              >
                <FaShoppingCart />
                Add To Cart
              </button>

              <button
                className="btn btn-danger btn-lg"
                onClick={
                  handleWishlist
                }
              >
                <FaHeart />
                Wishlist
              </button>

            </div>

            <div className="service-row">

              <div>

                <FaTruck />

                Fast Delivery

              </div>

              <div>

                <FaUndo />

                Easy Returns

              </div>

              <div>

                <FaShieldAlt />

                Secure Payment

              </div>

            </div>

            <div className="spec-box">

              <h4>
                Product Details
              </h4>

              <table className="table">

                <tbody>

                  <tr>
                    <td>Category</td>
                    <td>
                      {
                        product.category
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Brand</td>
                    <td>
                      {product.brand}
                    </td>
                  </tr>

                  <tr>
                    <td>Weight</td>
                    <td>
                      {product.weight}
                      kg
                    </td>
                  </tr>

                  <tr>
                    <td>Warranty</td>
                    <td>
                      {
                        product.warrantyInformation
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Shipping</td>
                    <td>
                      {
                        product.shippingInformation
                      }
                    </td>
                  </tr>

                  <tr>
                    <td>Return</td>
                    <td>
                      {
                        product.returnPolicy
                      }
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>


        <div className="mt-5">

          <h3>
            Customer Reviews
          </h3>

          <div className="row">

            {product.reviews?.map(
              (
                review,
                index
              ) => (

                <div
                  className="col-md-6 mb-3"
                  key={index}
                >

                  <div className="review-card">

                    <h6>
                      {
                        review.reviewerName
                      }
                    </h6>

                    <p>
                      {
                        review.comment
                      }
                    </p>

                    <small>
                      ⭐
                      {
                        review.rating
                      }
                      /5
                    </small>

                  </div>

                </div>

              )
            )}

          </div>

        </div>


        <div className="mt-5">

          <h3>
            Similar Products
          </h3>

          <div className="row">

            {relatedProducts
              ?.slice(0, 4)
              .map((item) => (

                <div
                  className="col-md-3"
                  key={item.id}
                >

                  <div className="related-card">

                    <img
                      src={
                        item.thumbnail
                      }
                      alt=""
                    />

                    <h6>
                      {item.title}
                    </h6>

                    <p>
                      ₹
                      {(
                        item.price *
                        83
                      ).toFixed(0)}
                    </p>

                  </div>

                </div>

              ))}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;