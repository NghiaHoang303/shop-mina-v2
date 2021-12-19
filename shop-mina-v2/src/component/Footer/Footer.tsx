import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  height: 270px;
  width: 100%;
  background-color: #e7e7e7;
  position: relative;
`;

const ContentLeft = styled.div`
  color: #888;
  font-weight: 700;
  font-size: 28px;
  align-self: center;
  line-height: 60px;
`;

const ContentRight = styled.div`
  color: #888;

  align-self: center;
  line-height: 60px;
  ul {
    list-style: none;
    display: flex;
    li {
      padding-right: 30px;
    }
  }
`;
const Footer: React.FC = () => {
  return (
    <Content>
      <ContentLeft>
        MINA
        <div>
          <Button>
            <FacebookIcon />
          </Button>
          <Button>
            <TwitterIcon />
          </Button>
          <Button>
            <InstagramIcon />
          </Button>
        </div>
      </ContentLeft>
      <ContentRight>
        <ul>
          <li>
            <Link to="#"> Payments & Delivery</Link>
          </li>
          <li>
            <Link to="#"> Return </Link>
          </li>
          <li>
            <Link to="#"> Contact </Link>
          </li>
        </ul>
        powered by NghiaHoang74
      </ContentRight>
    </Content>
  );
};

export default Footer;
