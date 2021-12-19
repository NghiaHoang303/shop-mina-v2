import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TopNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  color: black;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 10;
  height: 80px;
  align-items: center;
`;

const TopNavLeft = styled.div`
  align-self: center;
  font-size: 28px;
  font-weight: bold;
`;

const TopNavRight = styled.div`
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
`;

const NavTop: React.FC = () => {
  return (
    <TopNav>
      <TopNavLeft>
        <Link to="/">MINA</Link>
      </TopNavLeft>
      <TopNavRight>
        <ul>
          <li>
            <Link to="/" style={{ color: "black" }}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>{" "}
          <li>
            <Link to="/">Contact</Link>
          </li>{" "}
          <li>
            <Link to="/">Cart</Link>
          </li>
        </ul>
      </TopNavRight>
    </TopNav>
  );
};

export default NavTop;
