import { useContext } from "react";
import "./CartItem.css";
import { RxCross2 } from "react-icons/rx";
import { CartContext } from "../Context API/cartContext";
function CartItem({ el }) {
  const {
    increaseTotalMoney,
    decreaseTotalMoney,
    increaseTotal,
    addItemToCart,
    removeItemFromCart,
    decreaseTotal,
    removeOneItem,
  } = useContext(CartContext);
  function handleClickAdd() {
    addItemToCart(el);
    increaseTotalMoney(el?.price - el?.price * el?.discount);
    increaseTotal(1);
  }
  function handleClickrRemove1() {
    removeItemFromCart(el);
    decreaseTotalMoney(el?.price - el?.price * el?.discount);
    decreaseTotal(1);
  }
  function handleClickrRemove2() {
    removeOneItem(el);
    decreaseTotal(el?.quantity);
    decreaseTotalMoney(el?.quantity * (el?.price - el?.price * el?.discount));
  }
  return (
    <div className="flex-cart-cont">
      <div className="flex-cart-desc">
        <div className="flex-desc-cont">
          <div className="qunt">
            <div className="incDec" onClick={handleClickrRemove1}>
              -
            </div>
            <div>{el?.quantity}</div>
            <div className="incDec" onClick={handleClickAdd}>
              +
            </div>
          </div>
          <div className="flex-description">
            <div className="pic-cart-cont">
              {el && <img src={el?.pictureUrl} alt={el?.name} />}
            </div>
            <div className="product-cart-name">{el?.name}</div>
          </div>
        </div>
        <div className="cross" onClick={handleClickrRemove2}>
          <RxCross2 />
        </div>
      </div>
      <div className="flex-cart-price">
        €{(el?.quantity * (el?.price - el?.price * el?.discount)).toFixed(2)}
      </div>
    </div>
  );
}

export default CartItem;
