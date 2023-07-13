import React from 'react';
import './footer.css'
export const Footer = () => {
    return (
      <div className="footer">
        <img className="logo" src={require("../logo/logo.png")} alt="logo" />
        <div className="des">Thông tin footer</div>
      </div>
    );
}