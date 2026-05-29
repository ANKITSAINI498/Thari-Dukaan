import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { fetchProducts } from "../../redux/productSlice";

function Home() {

  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const { items, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts =
    selectedCategory === "all"
      ? items
      : items.filter(
          (product) =>
            product.category === selectedCategory
        );

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <Hero />

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="container my-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2 className="fw-bold">
            Featured Products
          </h2>

          <button className="btn btn-dark">
            View All
          </button>

        </div>

        <div className="row g-4">

          {filteredProducts.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Home;