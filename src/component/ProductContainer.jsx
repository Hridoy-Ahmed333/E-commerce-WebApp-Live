import { useContext, useState, useEffect } from "react";
import "./ProductContainer.css";
import { ProductContext } from "../Context API/productContext";
import ShowProduct from "./ShowProduct";

function ProductContainer() {
  const { productData, pageNo } = useContext(ProductContext);
  const [data, setData] = useState();
  const productInOnePage = 6;

  if (!productData) {
    return <div>Loading...</div>;
  }

  const length = productData.length ? productData.length : 0;
  const startIndex = (pageNo - 1) * productInOnePage;
  const endIndex = Math.min(startIndex + productInOnePage, length);

  const currentProducts = productData.slice(startIndex, endIndex);
  useEffect(() => {
    setData(currentProducts);
  }, [productData, pageNo]);

  return (
    <div>
      {length ? <ShowProduct data={data} /> : <div>No products available</div>}
    </div>
  );
}

export default ProductContainer;
