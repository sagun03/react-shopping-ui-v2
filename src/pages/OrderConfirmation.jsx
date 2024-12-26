import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import Announcement from "../components/Announcement";
import { flattenOrderProducts, truncateDescription } from "../utils/helper";
import {
  Details,
  Image,
  ProductDetail,
  ProductSize,
  ProductName,
  ProductPrice,
  ProductPrice2
} from "../components/styles/Cart";
import {
  Container,
  Title,
  Message,
  OrderId,
  Button,
  Section,
  SectionTitle,
  SectionButton,
  AdditionalSection,
  AdditionalTitle,
  AdditionalContent,
  Footer,
  Info,
  OrderSummaryTitle,
  SectionButtonContainer
} from "../components/styles/OrderConfirmation";
import { useOrderByOrderId } from "../hooks/useOrder";
import { SkeletonLoader } from "../components";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/slices/cartSlice";

const OrderConfirmationPage = () => {
  const { orderid: orderId } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useOrderByOrderId(orderId);
  const orderProducts = flattenOrderProducts(data?.products || []);

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.has("payment_intent") || params.has("payment_intent_client_secret")) {
      // Delete the payment_intent parameter
      params.delete("payment_intent");
      params.delete("payment_intent_client_secret");

      const newUrl = `${window.location.pathname}?${params.toString()}`;

      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  return (
    <>
      <NavBar />
      <Announcement />
      <Container>
        <Title>Order Confirmation</Title>
        {orderId && <OrderId>Your order ID is : {orderId}</OrderId>}
        <Message>
          Thank you for your purchase! You will receive an email confirmation
          shortly.
        </Message>
        <Section>
          <SectionTitle>What would you like to do next?</SectionTitle>
          <SectionButtonContainer>
          <Button to="/">Return to Home</Button>
          <SectionButton to="/products">Shop More</SectionButton>
          </SectionButtonContainer>
        </Section>
        <Info>
        <OrderSummaryTitle>Order Summary</OrderSummaryTitle>
          <div>
          {isLoading ? (
              <SkeletonLoader
              count={5}
              height={80}
              type="rectangle"
              skeletonProps={{
                text: true,
                textWidth1: "60%",
                textWidth2: "40%"
              }}
            />
          ) : (
            orderProducts && orderProducts.map((product, index) => (
                <ProductDetail key={index}>
                  <Image src={product?.images[0]} alt={product?.name} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product?.name}
                    </ProductName>
                    <ProductSize>
                      <b>Description:</b>{" "}
                      {truncateDescription(product?.description, 100)}
                    </ProductSize>
                    <ProductSize>
                      <b>Size:</b> {product?.size}
                    </ProductSize>
                    <ProductPrice>
                      <b>Rs.</b> {(product?.price * (product?.quantity || 1)).toFixed(2)}
                    </ProductPrice>
                    <ProductPrice2>
                      <b> Rs.</b>
                      {(
                        (product?.price -
                        (product?.price * (product.discountPercentage || 0) / 100)) *
                        (product?.quantity || 1)
                      ).toFixed(2)}
                    </ProductPrice2>
                  </Details>
                </ProductDetail>
            ))
          )}
          </div>
        </Info>
        <AdditionalSection>
          <AdditionalTitle>Need Help?</AdditionalTitle>
          <AdditionalContent>
            If you have any questions about your order, please reach out to our
            support team. We&apos;re here to help!
          </AdditionalContent>
          <Button to="/mailto:gurunanakgramudyog@gmail.com">
            Contact Support
          </Button>
        </AdditionalSection>
        <Footer>
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </Footer>
      </Container>
    </>
  );
};

export default OrderConfirmationPage;
