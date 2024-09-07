// Layout.js
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ProductProvider } from "../Context API/productContext";
import { CartProvider } from "../Context API/cartContext";

function Layout() {
  return (
    <div className="layout-container">
      <CartProvider>
        <ProductProvider>
          <Header />
          <main className="content-wrapper">
            <Outlet />
          </main>
          <div className="footer">
            <Footer />
          </div>
        </ProductProvider>
      </CartProvider>
    </div>
  );
}

export default Layout;
