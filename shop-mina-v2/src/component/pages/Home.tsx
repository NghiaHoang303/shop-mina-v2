import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { Button } from "@mui/material";
import BestSeller from "./BestSeller/BestSeller";
import { ButtonShop } from "../Button/Button";
import ShopDecorItem from "./ShopDecorItem/ShopDecorItem";
import DescriptionShop from "./DecriptionShop/DescriptionShop";
const HomePage = styled.div`
  height: auto;
  margin-top: 50px;
  text-align: center;
`;
const Image = styled.div`
  width: 100%;
  height: 900px;
  background-image: url("https://i.etsystatic.com/7473287/r/il/94969d/1166885310/il_fullxfull.1166885310_1t7q.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;

  background-position-y: center;
  background-position-x: 60%;
`;

const Content = styled.div`
  position: absolute;
  top: 40%;
  left: 30%;
`;

const Home: React.FC = () => {
  return (
    <HomePage>
      <Image>
        <Content>
          <p
            className={css`
              font-size: 100px;
              margin: 0;
            `}
          >
            Handmade ceramics
          </p>
          <p
            className={css`
              font-size: 30px;
              margin: 0;
            `}
          >
            Painted clay ceramics made with love.
          </p>

          <ButtonShop>shop now</ButtonShop>
        </Content>
      </Image>
      <BestSeller />
      <ShopDecorItem />
      <DescriptionShop />
    </HomePage>
  );
};

export default Home;
