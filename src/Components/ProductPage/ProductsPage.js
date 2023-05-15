import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
import "./ProductsPage.css";

const products = [
  {
    id: 1,
    title: "Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/400x250/0000FF/808080?text=Product+1",
  },
  {
    id: 2,
    title: "Product 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/400x250/FF0000/808080?text=Product+2",
  },
  {
    id: 3,
    title: "Product 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/400x250/00FF00/808080?text=Product+3",
  },
];

function ProductsPage() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const springs = useSprings(
    products.length,
    products.map((product, index) => ({
      x: (index - activeCardIndex) * 300,
      scale: index === activeCardIndex ? 1 : 0.8,
      zIndex: index === activeCardIndex ? 1 : 0,
      config: { friction: 50, tension: 150 },
    }))
  );

  const handleDrag = (event, info) => {
    if (info.offset.x > 100 && activeCardIndex > 0) {
      setActiveCardIndex(activeCardIndex - 1);
    } else if (info.offset.x < -100 && activeCardIndex < products.length - 1) {
      setActiveCardIndex(activeCardIndex + 1);
    }
  };

  return (
    <div className="products-page">
      <div className="products-page__header">
        <h1>Products</h1>
        <p>Welcome to our product page!</p>
      </div>
      <div className="products-page__cards">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
export default ProductsPage;
