import React from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import {login} from "../redux/apiCalls.js" ;
import styled from "styled-components";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";

// database
const database = [
  {
    username: "admin1",
    password: "123",
  },
  {
    username: "admin2",
    password: "123",
  },
];
const Error = styled.span`
  color: red;
`;

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };




  return (
    <div className="login_container">
      <div>
        <h1 style={{ fontSize: "40px" }}>Login</h1>
      </div>
      <form className="login_fields" >
        {/*login fields*/}

        {/*username field*/}
        <div className="login_input">
          <input type="text" name="uname" placeholder="Tên đăng nhập" onChange={(e)=>setUsername(e.target.value)} />
         
   
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "3px",
          }}
          className="login_input"
        >
          {/*password name*/}
          <input type="password" name="pass" placeholder="mật khẩu" onChange={(e)=>setPassword(e.target.value)} />

          <a>Quen mat khau</a>
        </div>

        <input style={{ cursor: "pointer" }} type="submit" value="Đăng nhập"  onClick={handleClick} disabled={isFetching}/>

        <div className="login_bottom">
           {error && <Error>Something went wrong...</Error>}
          <h1> Hoặc </h1>
          <p>Đăng nhập bằng</p>
       
          <div className="login_bottom_options">
            <a className="box" id="box1">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="box" id="box2">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a className="box" id="box3">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="box" id="box4">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="box" id="box5">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
