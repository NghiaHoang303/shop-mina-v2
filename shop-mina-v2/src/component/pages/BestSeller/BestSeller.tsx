import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
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
import { ButtonShop } from "../../Button/Button";
const BestSellerContent = styled.div`
  width: 100%;
  height: 800px;
`;

const ListItems = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;
const BestSeller: React.FC = () => {
  return (
    <BestSellerContent>
      <p
        className={css`
          font-size: 42px;
          font-weight: 500;
          color: #4d2c57;
          margin: 100px;
        `}
      >
        Our bestsellers
      </p>

      <ListItems className={css``}>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardMedia
            component="img"
            height="240"
            image="https://i.pinimg.com/originals/3a/39/5a/3a395a550920f00aa0685fb50e59e438.png"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              'Candy' Flowerpot
            </Typography>
            <p>$59.99</p>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites"></IconButton>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardMedia
            component="img"
            height="240"
            image="https://i.pinimg.com/originals/3a/39/5a/3a395a550920f00aa0685fb50e59e438.png"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              'Candy' Flowerpot
            </Typography>
            <p>$59.99</p>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites"></IconButton>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardMedia
            component="img"
            height="240"
            image="https://i.pinimg.com/originals/3a/39/5a/3a395a550920f00aa0685fb50e59e438.png"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              'Candy' Flowerpot
            </Typography>
            <p>$59.99</p>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites"></IconButton>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardMedia
            component="img"
            height="240"
            image="https://i.pinimg.com/originals/3a/39/5a/3a395a550920f00aa0685fb50e59e438.png"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              'Candy' Flowerpot
            </Typography>
            <p>$59.99</p>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites"></IconButton>
          </CardActions>
        </Card>
      </ListItems>

      <ButtonShop
        className={css`
          border: 2px solid #502f63 !important;
          background-color: #fff;
          margin-top: 80px !important;
        `}
      >
        {" "}
        Buy now{" "}
      </ButtonShop>
    </BestSellerContent>
  );
};

export default BestSeller;
