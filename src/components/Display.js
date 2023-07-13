import React from "react";
import './display.css'
import { Link } from "react-router-dom";
import { Button } from "./Button";
export const Display = ( {img,title,desc}) => {
    return (
        <div className="container_display">
            <div className="right">
                <img  src={img}  className="img"></img>
                <div className="title">{title}</div>
                <div className="title">{desc}</div>
            </div>
            <Link  to="/">
                <Button   Button bgColor="#912112" content="Xóa"></Button>
            </Link>
        </div>
    )
}