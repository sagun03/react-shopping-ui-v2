/* eslint-disable react/prop-types */
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/cartRedux";
import { v4 as uuidv4 } from "uuid";
import Alert from "./Alert";
import { WrapperContainer, Container, Image, Info, Icon, Content, CustomButton } from "./styles/ProductRangeCard";

const ProductRangeCard = ({ name, id, size, price, images }) => {
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(false);

  const handleClick = () => {
    dispatch(
      addProducts({
        name,
        id,
        size,
        quantity: 1,
        price: price - price * 0.05,
        productId: uuidv4(),
        originalPrice: price,
        image: images[0]
      })
    );
    // TODO: snackbar issue
    // setOpenAlert(true);
  };

  return (
    <WrapperContainer>
      <Container>
        <Image src={images[0]} />
        <Info>
          <Icon onClick={handleClick}>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Link to={`/product/${id}`}>
              <SearchOutlined />
            </Link>
          </Icon>
        </Info>
      </Container>
      <Content>
        <span
          style={{
            marginTop: "5px",
            fontSize: "1rem",
            alignItems: "center",
            fontWeight: 500
          }}
        >
          {name}
        </span>
        <span
          style={{
            marginTop: "3px",
            fontSize: "0.9rem",
            fontWeight: 400
          }}
        >
          ({size})
        </span>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1rem",
            marginTop: "10px",
            fontWeight: 500,
            alignItems: "center"
          }}
        >
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 300,
              textDecoration: "line-through",
              display: "flex",
              alignItems: "center",
              marginRight: "5px",
              color: "#615F5F"
            }}
          >
            Rs. {price}
          </span>
          Rs. {price - price * 0.05}
        </span>
      </Content>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <CustomButton variant="outlined" color="primary" onClick={handleClick}>
          Add to Cart
        </CustomButton>
      </div>
      {openAlert && (
        <Alert
          open={openAlert}
          type={"success"}
          message={"Your Product has been added to Cart"}
          setOpen={setOpenAlert}
        />
      )}
    </WrapperContainer>
  );
};

export default ProductRangeCard;
