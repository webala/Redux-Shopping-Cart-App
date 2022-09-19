import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = 100;
  const cartItems = useSelector(state => state.cart.itemsList)
  console.log('cart items: ', cartItems)
  return (

    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
