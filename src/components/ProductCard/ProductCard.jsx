import "./ProductCard.css";

import {
  FaShoppingCart,
  FaHeart,
  FaEye,
  FaStar,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import {
  addToCart,
} from "../../redux/cartSlice";

import {
  addToWishlist,
} from "../../redux/wishlistSlice";

function ProductCard({ product }) {

  const dispatch = useDispatch();

  const oldPrice = (
    (product.price + 100) * 83
  ).toFixed(0);

  const newPrice = (
    product.price * 83
  ).toFixed(0);


  function handleCart() {

    const currentUser =
      JSON.parse(
        localStorage.getItem(
          "currentUser"
        )
      );

    if (!currentUser) {

      alert(
        "Please Login First"
      );

      return;
    }

    dispatch(
      addToCart(product)
    );

    alert(
      "Product Added To Cart"
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

      alert(
        "Please Login First"
      );

      return;
    }

    dispatch(
      addToWishlist(product)
    );

    alert(
      "Added To Wishlist"
    );
  }

  return (
    <div className="premium-card">


      <div className="discount-badge">

        -
        {Math.round(
          product.discountPercentage ||
          10
        )}
        %

      </div>


      <button
        className="wishlist-btn"
        onClick={handleWishlist}
      >
        <FaHeart />
      </button>


      <div className="image-wrapper">

        <img
          src={
            product.thumbnail ||
            product.images?.[0]
          }
          alt={product.title}
          className="product-image"
        />

      </div>


      <div className="product-content">

        <span className="category">
          {product.category}
        </span>

        <h5 className="product-title">

          {product.title}

        </h5>


        <div className="rating-box">

          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span>
            ({product.rating})
          </span>

        </div>


        <div className="price-box">

          <h3>
            ₹{newPrice}
          </h3>

          <del>
            ₹{oldPrice}
          </del>

        </div>


        <div className="action-buttons">

          <button
            className="cart-btn"
            onClick={handleCart}
          >

            <FaShoppingCart />

            Add To Cart

          </button>

          <Link
            to={`/product/${product.id}`}
            className="view-btn"
          >

            <FaEye />

          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;