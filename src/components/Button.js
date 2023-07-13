import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

export const Button =({content,bgColor,fontSize,width})=>{
    var stylingObject = {
    div: {
        display: 'inline',
        boxSizing:'border-box'
    }, input: {
        margin: "0px",
        padding: "12px 30px",
        width: width || "content-width ",
        minWidth: width/2 || "160px",
        maxWidth: "300px",
        backgroundColor: bgColor || "white",
        color: "white",
        borderRadius: "15px",
        fontSize:  fontSize ||"20px",
        border: "none",
        boxSizing:'border-box' ,
    }
}

    return(
        <div style={stylingObject.div}>
            <input type="submit" value={content} style={stylingObject.input} ></input>
        </div>
    )
}
