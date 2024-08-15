/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/cartRedux";
import { v4 as uuidv4 } from "uuid";
import Alert from "./Alert";
import { WrapperContainer, Container, Image, Info, Icon, Content, CustomButton } from "./styles/ProductRangeCard";
import { useUserAuth } from "../context/UserAuthContext";
import { useCreateCart } from "../hooks/useCart";

const ProductRangeCard = ({ name, id, size, price, images }) => {
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(false);
  const userAuth = useUserAuth();
  const [user, setUser] = useState({});
  const { mutate: createCart } = useCreateCart();
  useEffect(() => {
    setUser(userAuth.user || {});
  }, [userAuth.user]);

  const handleClick = () => {
    console.log(name, id, size, price, images, user)

    const productObject = {
      userId: user?.uid,
      Products: [{
        productID: id,
        quantity: 1,
        unitPrice: price,
        size
      }]
    }
    const onSuccessCallback = () => {
      window.location.reload();
      console.log("Additional actions after cart creation");
    };
    createCart({ cartDetails: productObject, userID: user?.uid })
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
