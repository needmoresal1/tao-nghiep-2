import React from 'react';
import './hero.css';
import { Nav } from '../components/Nav';
import { Footer } from './Footer';
import { Section } from '../components/Section';
import { Link } from 'react-router-dom';
export const Hero = () => {
    return(
        <div>
            <Nav />
            <div className="hero-container">
                <div className='img'>         
                </div>
                <div className="hero-left-content">
                    <p>KHÁM PHÁ NHỮNG XU HƯỚNG GẦN ĐÂY</p>
                </div>
                    <Link to="/Shop">
                        <div className="hero-right-content">
                                <input type="submit" className="button" value="Tìm hiểu thêm" >

                                </input>
                        </div>
                    </Link>
                </div>
            <Section link="/shop"></Section>
            <Section link="/content"des="Các khóa học cho thiết kế 3D" butDes="Khám phá" bgColor="#007E25"></Section>
            <Section link="/content" des="Cần họa sĩ cho dự án của bạn" butDes="Tuyển dụng" bgColor="#00B735"></Section>
            <Footer></Footer>
        </div>
        
    )
}