import CartContainer from "../component/CartContainer";
import Checkout from "../component/Checkout";
import "./OrderDetail.css";
function OrderDetail() {
  return (
    <div className="orderDetail">
      <div className="ordCont1">
        <div className="orderHeader">An overviwe of your products</div>
        <div className="subOrder1">
          <CartContainer />
        </div>
      </div>
      <div className="ordCont2">
        <div className="ord-cnt">
          <div className="orderHeader">Order Details</div>
          <div className="subOrder2">
            <Checkout />
          </div>
        </div>

        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default OrderDetail;
