import React, { useEffect } from "react";
import './shop.css';
import { CategoryContainer } from "../page/CategoryContainer";
import { Item } from "../components/Item";
import { Nav } from "../components/Nav";
import { Footer } from "./Footer";
import { popularProducts } from "../data";
import axios from "axios";
import { useState } from "react";




export const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const getProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:5000/api/products")
                setProducts(res.data)
            }catch(err){}
        }
        getProducts()
})


    return (
        <div>
                <Nav></Nav>
            
            <div className="shop">
                    {products.map((item) => (
                    <Item item={item} key={item.id} />
                    ))}
            </div>
                <Footer/>
        </div>
    )
}