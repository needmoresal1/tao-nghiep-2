import styled from "styled-components";
import React from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import './content.css'
const Wrapper = styled.div`
  &:hover ${Button} {
    display: none;
  }
  `;
const Container = styled.div`

  position: relative;
  width:50%;
  height:600px;
  border: black solid;
  background-color: #004830;
  justify-content: center;
  display:flex;
    margin: 100px auto;
padding: 0px 100px;
box-sizing: border-box;
align-items: center;
gap: 20px;
justify-content: center;
flex-direction: column;
`;
const Text = styled.div`

    align-items: center;
    color: white;
    font-size: 40px;
    text-align: center;
`

export const Content = ({display,isPayment}) =>{
    return (
      <Container>
        <Text>{display || "Tính năng này sẽ được cập nhật sau"}</Text>
        {isPayment && (
          <img className="logo" src={require("../logo/momo.jpg")} alt="logo" />
        )}
        <Wrapper>
          <Link to={`/`}>
            <Button
              content="Quay về trang chủ"
              bgColor="#CC2F19"
              width="400px"
            ></Button>
          </Link>
        </Wrapper>
      </Container>
    );
}