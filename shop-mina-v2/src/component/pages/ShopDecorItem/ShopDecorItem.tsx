import React from "react";
import styled from "@emotion/styled";
import { ButtonShop } from "../../Button/Button";
import { css } from "@emotion/css";
const Content = styled.div`
  background-image: url("https://images.eq3.com/image-service/b5698e38-6551-4865-b7de-2c2d6680d3e3/87.jpg_COMPRESSED.jpg");
  width: 100%;
  height: 1000px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  color: white;
  position: relative;
  margin-bottom: 100px; ;
`;

const ContentOfShop = styled.div`
  position: absolute;
  top: 40%;
  left: 30%;
`;
const ShopDecorItem: React.FC = () => {
  return (
    <Content>
      <ContentOfShop>
        <p
          className={css`
            font-size: 100px;
            margin: 0;
          `}
        >
          Home decor items
        </p>
        <p
          className={css`
            font-size: 30px;
            margin: 40px 0;
          `}
        >
          Find your new favorite pieces
        </p>

        <ButtonShop>shop now</ButtonShop>
      </ContentOfShop>
    </Content>
  );
};
export default ShopDecorItem;
