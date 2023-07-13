import React from "react";
import "./itemDetail.css"
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { useEffect,useState } from "react";
import {useLocation} from "react-router-dom"
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Nav } from "../components/Nav";

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
export const ItemDetail = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [item,setItem] = useState({});
    const [quantity,setQuantity] = useState(1);
    const dispatch = useDispatch();
    const handleQuantity = (type) =>{
        if(type === "dec"){
            quantity > 1 && setQuantity(quantity-1);
        }else{
            console.log("something");
            setQuantity(quantity+1);
        }
    }

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

    const handleClick = () =>{
        dispatch(addProduct({ ...item, quantity}))
    };

    
    return(
        <div>
            <Nav></Nav>
        <div className="container_detail">
            <img alt="img" className="left" src={item.img} style={{background:"url('../../img/hero.png')"}}></img>
            <div className="right">
                <div className="head">
                    <div className="title">{item.title}</div>
                    <div className="author">ChanEXE</div>
                    <div className="des">{item.desc}</div>
                </div>
                <div className="bottom">
                    <div className="bottom_price">
                        <div className="review">Dánh giá sản phẩm</div>
                        <div className="price">{item.price} VND</div>
                             <AmountContainer>
                                <Remove onClick={() => handleQuantity("dec")} />
                                <Amount>{quantity}</Amount>
                                <Add onClick={() => handleQuantity("inc")} />
                            </AmountContainer>
                    </div>
                    <Link to={`/payment/${id}`}>
                        <Button onClick={handleClick} content="Mua" bgColor="#CC2F19" width="400px">
                        </Button>
                    </Link>
            
                </div>
            </div>
        </div>
    </div>
    )
}