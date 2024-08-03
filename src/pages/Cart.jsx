import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { mobile, ScreenWith670px, ScreenWith960px } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { addProduct, removeProducts } from "../redux/cartRedux";
import { v4 as uuidv4 } from "uuid";
import addToCart from "./images/addToCart.png";
import { Link } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import { IconButton } from "@mui/material";
import BottomNav from "../components/BottomNav";
import { Helmet } from "react-helmet-async";
import { useUserAuth } from "../context/UserAuthContext";
import { useCartContext } from "../context/cartContext";
import useFetchCartData from "../hooks/custom hooks/useFetchCartData";
import { useUpdateCart, useDeleteCart, useDeleteProuctCart } from "../hooks/useCart";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 2.5rem;
  margin-bottom: 5rem;
  margin-top: 5rem;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: whitesmoke;
  margin: 20px;
  ${mobile({ flexDirection: "column", gap: "2rem" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${ScreenWith670px({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  ${mobile({ flexDirection: "column", height: "unset" })};
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
})}
`;

const Image = styled.img`
  width: 180px;
  object-fit: contain;

  ${ScreenWith960px({ width: "160px" })}
  ${ScreenWith670px({ width: "120px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  ${mobile({ margin: "5px 15px", fontSize: "16px" })}
  ${ScreenWith960px({ fontSize: "20px" })}
  ${ScreenWith670px({ fontSize: "18px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  font-weight: 100;
  text-decoration: line-through;
  color: #615f5f;
  ${mobile({ marginBottom: "20px", fontSize: "20px" })}
  ${ScreenWith960px({ fontSize: "26px" })}
  ${ScreenWith670px({ fontSize: "24px" })}
`;

const ProductPrice2 = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px", fontSize: "20px" })}
  ${ScreenWith960px({ fontSize: "26px" })}
  ${ScreenWith670px({ fontSize: "24px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const CartImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CartImage = styled.img`
  max-width: 100%;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const userAuth = useUserAuth();
  const [user, setUser] = useState({});
  const { cartData, setCartData } = useCartContext();
  const [data, setData] = useState({});
  const [size, setSize] = useState("");
  const [singleNull, setSingleNull] = useState(false)

  const { mutate: updateCart } = useUpdateCart();
  const { mutate: deleteCart } = useDeleteCart();
  const { mutate: deleteProductCart } = useDeleteProuctCart()

  useEffect(() => {
    setUser(userAuth.user || {});
  }, [userAuth.user]);

  const dataFetched = useFetchCartData(userAuth.user);

  useEffect(() => {
    if (dataFetched && userAuth.user) {
      setCartData(dataFetched);
      setData(dataFetched);
    }
  }, [cartData, dataFetched, userAuth.user, setCartData]);

  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  const handleClick = (type, item, id = "") => {
    let sampleCartData;
    let singleNull = false
    if (type === "dec") {
      sampleCartData = {
        ...data,
        products: data.products
          .map(value => {
            if (value?.productDetails?.id === id && value.quantity > 1 && value?.productDetails?.sizes[0]?.size === item?.productDetails?.sizes[0]?.size) {
              return { ...value, quantity: value.quantity - 1 };
            } else if (value?.productDetails?.id === id && value.quantity === 1) {
              singleNull = !singleNull
              return null;
            }
            return value;
          })
          .filter(value => value !== null)
      };
    } else {
      sampleCartData = {
        ...data,
        products: data.products.map(value => {
          if (value?.productDetails?.id === id && value?.productDetails?.sizes[0]?.size === item?.productDetails?.sizes[0]?.size) {
            return { ...value, quantity: value.quantity + 1 };
          }
          return value;
        })
      };
    }
    if (singleNull) {
      deleteProductCart({ CartID: sampleCartData?.CartID, productId: id })
      singleNull = false
    } else {
      if (sampleCartData?.products?.length === 0) {
        deleteCart({ CartID: sampleCartData?.CartID });
      } else {
        const createdObjectForCart = {
          userId: cartData?.userId,
          Products: sampleCartData.products.map(value => ({
            productID: value?.productDetails?.id,
            Quantity: value.quantity,
            unitPrice: value?.productDetails?.sizes[0]?.price,
            size: value?.productDetails?.sizes[0]?.size
          }))
        };
        updateCart({ CartID: sampleCartData?.CartID, cartDetails: createdObjectForCart });
      }
    }
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + "...";
  };

  return (
    <>
      <Helmet>
        <title>Shopping Cart</title>
        <link rel="canonical" href="/cart" />
      </Helmet>
      <Container>
        <Announcement />
        <NavBar />
        <Wrapper>
          {!dataFetched || data.length === 0 || dataFetched?.products.length === 0 ? (
            <Link to="/">
              <Title>Click Here to Add Product</Title>
            </Link>
          ) : (
            <Title>YOUR BAG</Title>
          )}
          {!dataFetched || data.length === 0 || dataFetched?.products.length === 0 ? (
            <CartImageContainer>
              <CartImage src={addToCart} alt="add to cart" />
            </CartImageContainer>
          ) : (
            <>
              <Top>
                <Link to="/products">
                  <TopButton>CONTINUE SHOPPING</TopButton>
                </Link>
                <TopTexts>
                  <TopText>Shopping Bag({cart?.quantity})</TopText>
                </TopTexts>
              </Top>
              <Bottom>
                <Info>
                  {data?.products?.map((item) => (
                    <Fragment key={uuidv4()}>
                      <Product>
                        <ProductDetail>
                          <Image src={item?.productDetails?.sizes[0]?.images[0]} />
                          <Details>
                            <ProductName>
                              <b>Product:</b> {item?.productDetails?.name}
                            </ProductName>
                            <ProductSize>
                              <b>Description:</b> {truncateDescription(item?.productDetails?.description, 100)}
                            </ProductSize>
                          </Details>
                        </ProductDetail>
                        <PriceDetail>
                          <ProductAmountContainer>
                            <IconButton>
                              <Remove
                                onClick={() =>
                                  handleClick("dec", item, item.productDetails?.id)
                                }
                              />
                            </IconButton>
                            <ProductAmount>{item?.quantity}</ProductAmount>
                            <IconButton>
                              <Add
                                onClick={() =>
                                  handleClick("add", item, item.productDetails?.id)
                                }
                              />
                            </IconButton>
                          </ProductAmountContainer>
                          <ProductPrice>
                            Rs. {item?.productDetails?.sizes[0]?.price * item?.quantity}
                          </ProductPrice>
                          <ProductPrice2>
                            Rs.{" "}
                            {(item?.productDetails?.sizes[0]?.price * item?.quantity + 0.0).toFixed(2)}
                          </ProductPrice2>
                        </PriceDetail>
                      </Product>
                      <Hr />
                    </Fragment>
                  ))}
                </Info>
                <OrderSummary />
              </Bottom>
            </>
          )}
        </Wrapper>
        <Footer />
      </Container>
      <BottomNav />
    </>
  );
};

export default Cart;
