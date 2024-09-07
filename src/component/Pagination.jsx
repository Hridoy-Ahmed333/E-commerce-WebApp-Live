import { useContext } from "react";
import { ProductContext } from "../Context API/productContext";
import "./Pagination.css";

function Pagination() {
  const { productData, pageNo, setPageNo } = useContext(ProductContext);

  const totalItems = productData ? productData.length : 0;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page) => {
    setPageNo(page);
  };

  const handlePrevClick = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNextClick = () => {
    if (pageNo < totalPages) {
      setPageNo(pageNo + 1);
    }
  };

  return (
    <div>
      {totalItems > 0 ? (
        <div className="pageNumberContainer">
          <div
            className={`arrow ${pageNo === 1 ? "deactivePage" : ""}`}
            onClick={handlePrevClick}
          >
            &lt;
          </div>
          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className="pageNumber"
              style={{
                border:
                  pageNo === index + 1
                    ? "1px solid rgba(14, 14, 14, 1)"
                    : "1px solid rgba(223, 227, 232, 1)",
              }}
            >
              {index + 1}
            </div>
          ))}
          <div
            className={`arrow ${pageNo === totalPages ? "deactivePage" : ""}`}
            onClick={handleNextClick}
          >
            &gt;
          </div>
        </div>
      ) : (
        <div className="pageNumberContainer">Loading...</div>
      )}
    </div>
  );
}

export default Pagination;
