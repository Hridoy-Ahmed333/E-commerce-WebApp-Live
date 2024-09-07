import { useContext, useEffect, useState } from "react";
import "./Store.css";
import Spinner from "../component/Spinner";
import { ProductContext } from "../Context API/productContext";
import ProductContainer from "../component/ProductContainer";
import Pagination from "../component/Pagination";

function Store() {
  const [active, setActive] = useState(1);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  const { productData, setProductData, pageNo, setPageNo } =
    useContext(ProductContext);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://hridoy-ahmed333.github.io/api/${
          active === 1
            ? "rockingChair.json"
            : active === 2
            ? "sideChair.json"
            : "loungeChair.json"
        }`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
      setProductData(result);

      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      console.error(err);

      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [active]);
  return (
    <div className="store-container">
      <div className="container-store">
        <div className="category-container">
          <div className="out-box">
            <div
              className={`inner-box ${active === 1 ? "active" : ""}`}
              onClick={() => {
                setActive(1);
                setPageNo(1);
              }}
            >
              <div>Rocking Chair</div>
            </div>
          </div>
          <div
            className="out-box"
            onClick={() => {
              setActive(2);
              setPageNo(1);
            }}
          >
            <div className={`inner-box ${active === 2 ? "active" : ""}`}>
              <div>Side Chair</div>
            </div>
          </div>
          <div
            className="out-box"
            onClick={() => {
              setActive(3);
              setPageNo(1);
            }}
          >
            <div className={`inner-box ${active === 3 ? "active" : ""}`}>
              <div>Lounge Chair</div>
            </div>
          </div>
        </div>

        <div className="product-container">
          {loading ? (
            <div className="spinner-container">
              <Spinner />
            </div>
          ) : (
            <ProductContainer />
          )}
          <div className="page-container">{loading ? "" : <Pagination />}</div>
        </div>
      </div>
    </div>
  );
}

export default Store;
