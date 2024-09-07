import { useContext } from "react";
import "./ProductCard.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CartContext } from "../Context API/cartContext";
function ProductCard({ product }) {
  const { addItemToCart, increaseTotalMoney, increaseTotal } =
    useContext(CartContext);

  function handleClick() {
    addItemToCart(product);
    increaseTotalMoney(product?.price - product?.price * product?.discount);
    increaseTotal(1);
  }

  return (
    <div className="productCard">
      <div className="imageContainer">
        {product && <img src={product?.pictureUrl} alt={product?.name} />}
      </div>
      <div className="productDesc">
        <div className="productName">{product?.name}</div>
        <div className="priceBox">
          <span>
            €{(product?.price - product?.price * product?.discount).toFixed(2)}
          </span>
          <span className="cut">€{(product?.price).toFixed(2)}</span>
          <span className="off">
            {(product?.discount * 100).toFixed(0)}% OFF
          </span>
        </div>
        <div className="proddesc">{product?.description}</div>
      </div>
      <button className="btn-str" onClick={handleClick}>
        <HiOutlineShoppingBag size={24} /> Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
