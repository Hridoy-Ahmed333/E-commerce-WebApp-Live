import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  const hasItemInCart = (itemId) => cart.some((item) => item.id === itemId);

  const addItemToCart = (item) => {
    if (hasItemInCart(item.id)) {
      setCart((prevCart) =>
        prevCart.map((existingItem) =>
          existingItem.id === item.id
            ? { ...existingItem, quantity: existingItem.quantity + 1 }
            : existingItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (item) => {
    if (hasItemInCart(item.id)) {
      setCart((prevCart) =>
        prevCart
          .map((existingItem) =>
            existingItem.id === item.id
              ? { ...existingItem, quantity: existingItem.quantity - 1 }
              : existingItem
          )
          .filter((existingItem) => existingItem.quantity > 0)
      );
    }
  };

  const removeOneItem = (item) => {
    if (hasItemInCart(item.id)) {
      setCart((prevCart) =>
        prevCart.filter((existingItem) => existingItem.id !== item.id)
      );
    }
  };

  const increaseTotalMoney = (money) => {
    const newTotalMoney = price + money;
    setPrice(newTotalMoney);
  };
  const decreaseTotalMoney = (money) => {
    const newTotalMoney = price - money;
    setPrice(newTotalMoney);
  };

  const increaseTotal = (num) => {
    const newTotal = total + num;
    setTotal(newTotal);
  };
  const decreaseTotal = (num) => {
    const newTotal = total - num;
    setTotal(newTotal);
  };

  useEffect(() => {
    console.log("Cart updated:", cart);
    console.log("Total updated:", total);
    console.log("Price updated:", price);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItemToCart,
        removeItemFromCart,
        total,
        setTotal,
        price,
        setPrice,
        increaseTotalMoney,
        decreaseTotalMoney,
        increaseTotal,
        decreaseTotal,
        removeOneItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
