import {
  FaThLarge,
  FaMagic,
  FaSprayCan,
  FaCouch,
  FaShoppingBasket,
  FaMobileAlt,
  FaLaptop,
} from "react-icons/fa";

import "./Categories.css";

const categories = [
  {
    name: "all",
    icon: <FaThLarge />,
  },
  {
    name: "beauty",
    icon: <FaMagic />,
  },
  {
    name: "fragrances",
    icon: <FaSprayCan />,
  },
  {
    name: "furniture",
    icon: <FaCouch />,
  },
  {
    name: "groceries",
    icon: <FaShoppingBasket />,
  },
  {
    name: "smartphones",
    icon: <FaMobileAlt />,
  },
  {
    name: "laptops",
    icon: <FaLaptop />,
  },
];

function Categories({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <section className="categories-section">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="categories-title">
            Shop By Category
          </h2>

          <p className="categories-subtitle">
            Discover products from top categories
          </p>

        </div>

        <div className="row g-4">

          {categories.map((category, index) => (

            <div
              className="col-xl-2 col-lg-3 col-md-4 col-6"
              key={index}
            >

              <div
                className={`category-card ${
                  selectedCategory === category.name
                    ? "active-category"
                    : ""
                }`}
                onClick={() =>
                  setSelectedCategory(category.name)
                }
              >

                <div className="category-icon">
                  {category.icon}
                </div>

                <h6 className="category-name">
                  {category.name}
                </h6>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;