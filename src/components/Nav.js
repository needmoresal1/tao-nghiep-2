import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useSelector } from "react-redux";

export const Nav = () => {
    
    // const quantity = useSelector(state=>state.cart.quantity)
    const user = useSelector((state) => state.user.currentUser);
    return (
      <nav className="navbar">
        <img className="logo" src={require("../logo/logo.png")} alt="logo" />
        <div className="nav_options">
          <Link to={`/Shop`}>
            <address className="dropdown">Mua ban</address>
          </Link>
          <Link to={"/content"}>
            {" "}
            <a className="dropdown">Lam viec</a>
          </Link>
          <Link to={"/content"}>
            {" "}
            <a className="dropdown">Lop hoc</a>
          </Link>
        </div>
        <input type="text" className="search_field" value="Search" />
        {!user ? (
          <Link to="/login">
            <input
              style={{ cursor: "pointer" }}
              type="submit"
              value="Đăng nhập/Đăng ký"
              className="navbar_button"
            ></input>
          </Link>
        ) : (
          <div style={{ fontSize: "32px", color: "white" }}>
            Xin chào {user.username}
          </div>
        )}
        {/* <div>Item in cart: {quantity}</div> */}
      </nav>
    );
}