import { useContext } from "react";
import "./Checkout.css";
import { CartContext } from "../Context API/cartContext";
function Checkout() {
  const { price } = useContext(CartContext);
  return (
    <div className="detail-checkout">
      <div className="detail-checkout-container order-text">
        <div className="flex-detail ">
          <div>Subtotal</div>
          <div>€ {price.toFixed(2)}</div>
        </div>
        <div className="flex-detail">
          <div>Shipping</div>
          <div>Free</div>
        </div>
        <div className="flex-detail">
          <div>Estimated Tax</div>
          <div>€-</div>
        </div>
      </div>
      <div className="flex-detail">
        <div className="totalCheck">Total</div>
        <div className="totalCash">€ {price.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default Checkout;
