import React from "react";
import { useLocation } from "react-router-dom";
import './payment.css'
import { Display } from "../components/Display";
import { Button } from "../components/Button";
import { Nav } from "../components/Nav";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { publicRequest } from "../requestMethods";

export const Payment = () => {
    // const cart = useSelector(state=>state.cart)
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [item,setItem] = useState({});
    
    useEffect(()=>{
        const getItem = async () =>{
            try{
                const res = await publicRequest.get("/products/find/"+id);
                setItem(res.data)
            }catch{
                
            } 
        }
        getItem();
    },[id])
    return(
        <div>

        <Nav>

        </Nav>
        <div className="container_payment">
            <div className="left">
            
                <Display img={item.img} desc={item.desc}title={item.title}></Display>
            </div>
            <div className="right">
                <div className="item_des">
                    <div className="title">{item.title}</div>
                    <div className="price">{item.price} VNĐ</div>
                </div>
                <div className="total_price">
                    <hr></hr>
                    {/* <div className="total">{item.price}$</div> */}
                    <Link to="/content/thankyou">
                        <Button bgColor="#CC2F19" content="Thanh Toán" width="335px"></Button>
                    </Link>
                </div>
            </div>
        </div>  
                </div>
    )
}