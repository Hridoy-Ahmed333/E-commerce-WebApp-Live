import { useState } from "react";
import "./ShowProduct.css";
import ProductCard from "./ProductCard";

function ShowProduct({ data }) {
  const [loading, setLoading] = useState(true);

  if (data && loading) {
    setLoading(false);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-grid">
      <div className="product-grid__wrapper">
        {data.map((item, index) => (
          <div key={index} className="product-card">
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowProduct;
