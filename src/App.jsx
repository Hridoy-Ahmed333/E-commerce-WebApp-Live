import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import OrderDetail from "./pages/OrderDetail";
import Store from "./pages/Store";
import { UserContext, UserProvider } from "./Context API/userContext";
import Error from "./pages/Error";
import { useContext } from "react";
import Layout from "./component/Layout";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/orderDetail" element={<OrderDetail />} />
            <Route path="/store" element={<Store />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
