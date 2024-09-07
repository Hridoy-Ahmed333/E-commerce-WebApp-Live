import { useContext } from "react";
import "./Header.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CartContext } from "../Context API/cartContext";
import { ProductContext } from "../Context API/productContext";
import { UserContext } from "../Context API/userContext";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const { total, setCart, setTotal, setPrice } = useContext(CartContext);
  const { setProductData, setPageNo } = useContext(ProductContext);
  const { setUserData } = useContext(UserContext);
  function handleClick() {
    navigate("/");
    localStorage.removeItem("currentUser");
    setCart([]);
    setTotal(0);
    setPrice(0);
    setProductData(null);
    setPageNo(1);
    setUserData(null);
  }
  return (
    <div className="header-Container">
      <div className="logo" onClick={() => navigate("/store")}>
        <div className="icon2">
          <div>F</div>
        </div>
        <div className="funi">Furni</div>
        <div className="flex">Flex</div>
      </div>
      <div className="link-container">
        <div className="link-box" onClick={() => navigate("/store")}>
          Home
        </div>
        <div className="link-box" onClick={() => navigate("/store")}>
          Products
        </div>
        <div className="link-box" onClick={() => navigate("/store")}>
          Categories
        </div>
        <div className="link-box" onClick={() => navigate("/store")}>
          Custom
        </div>
        <div className="link-box" onClick={() => navigate("/store")}>
          Blog
        </div>
      </div>
      <div className="cart-container">
        <div className="cart-icon">
          <HiOutlineShoppingBag
            size={32}
            onClick={() => navigate("/orderDetail")}
          />
          <div
            className="totalCartNumber"
            onClick={() => navigate("/orderDetail")}
          >
            {total}
          </div>
        </div>
        <div className="pic-icon"></div>
        <button onClick={handleClick}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
