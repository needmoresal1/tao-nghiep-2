import React from "react";
import './section.css';
import { Link } from "react-router-dom";
import { Button } from "./Button";
export const Section =({des,butDes,bgColor,link})=>{

return(
    <div className="section">
        <div className="bg">
        </div>
        <div className="bg_img">
        </div>
        <div className="section_con">
            <div>{des||"Mua Bán model 3D"}</div>
        </div>
        <Link to={link}>    
          <Button content={butDes||"Đến chợ"} bgColor={bgColor||'#005D1B'}></Button>
        </Link>
    </div>
)
}