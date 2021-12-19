import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  ListItem,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { ButtonShop } from "../../../Button/Button";

const ListItems = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 200px 0 100px 0;
`;

const DescriptionShop: React.FC = () => {
  return (
    <div>
      <ListItems className={css``}>
        <Card sx={{ maxWidth: 600, margin: "10px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            height="300"
            image="https://cdn.shopify.com/s/files/1/0099/7081/0937/products/17_2000x2000.jpg?v=1638546193"
            alt="Paella dish"
          />
          <CardContent
            className={css`
              text-align: left;
              color: #4d2c57;
            `}
          >
            <Typography
              color="text.secondary"
              className={css`
                font-size: 40px !important;
                color: #4d2c57 !important;
              `}
            >
              Sustainability
            </Typography>
            <p
              className={css`
                font-size: 20px !important;
                color: #4d2c57 !important;
              `}
            >
              Mina is an eco-friendly brand that cares about sustainability.
            </p>
          </CardContent>
          <CardActions disableSpacing>
            <ButtonShop
              className={css`
                border: 2px solid #4d2c57 !important;
              `}
            >
              Lear more
            </ButtonShop>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 600, margin: "10px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            height="300"
            image="https://cdn.shopify.com/s/files/1/0099/7081/0937/products/17_2000x2000.jpg?v=1638546193"
            alt="Paella dish"
          />
          <CardContent
            className={css`
              text-align: left;
              color: #4d2c57;
            `}
          >
            <Typography
              color="text.secondary"
              className={css`
                font-size: 40px !important;
                color: #4d2c57 !important;
              `}
            >
              About Mina
            </Typography>
            <p
              className={css`
                font-size: 20px !important;
                color: #4d2c57 !important;
              `}
            >
              Mina is a brand born out of a passion for ceramics.
            </p>
          </CardContent>
          <CardActions disableSpacing>
            <ButtonShop
              className={css`
                border: 2px solid #4d2c57 !important;
              `}
            >
              Lear more
            </ButtonShop>
          </CardActions>
        </Card>
      </ListItems>
    </div>
  );
};

export default DescriptionShop;
