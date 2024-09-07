import React, { useEffect, useContext, useState } from "react";
import { CartContext } from "../Context API/cartContext";
import "./CartContainer.css";
import CartItem from "./CartItem";

function CartContainer() {
  const { cart } = useContext(CartContext);
  const [data, setData] = useState(null);
  console.log(cart);
  return (
    <div>
      {cart?.map((el, index) => (
        <CartItem key={index} el={el} />
      ))}
    </div>
  );
}

export default CartContainer;
