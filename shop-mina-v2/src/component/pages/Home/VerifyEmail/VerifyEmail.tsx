import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { ButtonShop } from "../../../Button/Button";
import { TextField } from "@mui/material";
const Content = styled.div`
  width: 100%;
  height: 622px;
  background-image: url("https://images.unsplash.com/photo-1551499779-ee50f1aa4d25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGVsJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  position: relative;
  margin-bottom: 100px;
`;
const ContentOfShop = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
`;
const VerifyEmail: React.FC = () => {
  return (
    <Content>
      <ContentOfShop>
        <p
          className={css`
            font-size: 100px;
            margin: 0;
          `}
        >
          Sign-up for our newsletter
        </p>
        <TextField
          id="filled-basic"
          className={css`
            width: 400px;
            color: white !important;
            background-color: #f5f5f5;
            font-size: 18px;
            border: none !important;
            margin: 30px 0 10px 0 !important;
            opacity: 0.8;
          `}
          placeholder="Your email address"
        />
        <br />

        <ButtonShop>shop now</ButtonShop>
      </ContentOfShop>
    </Content>
  );
};

export default VerifyEmail;
