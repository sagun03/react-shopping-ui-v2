import React from "react";
import { useLocation } from "react-router-dom";

import NavBar from "../components/nav/NavBar";
import Announcement from "../components/Announcement";
import { useDataContext } from "../context/DataContext";
import { flattenProductSizes, truncateDescription } from "../utils/helper";
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

const OrderConfirmationPage = () => {
  const location = useLocation();
  const orderId = new URLSearchParams(location.search).get("orderId");
  const { products } = useDataContext();
  // fetch the products using this orderId from the database
  // le say for now we have "66a918100a2d154787af2b7f" product with any orderId
  // need to replace this with actual orderId and product id associated with it
  const filterProduct = flattenProductSizes(
    products.filter((product) => product.id === "66a918100a2d154787af2b7f")
  );

  console.log("filterProduct", filterProduct);

  return (
    <>
      <NavBar />
      <Announcement />
      <Container>
        <Title>Order Confirmation</Title>
        {orderId && <OrderId>Your order ID is: {orderId}</OrderId>}
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
          {filterProduct.map((product, index) => (
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
                  <b>Rs.</b> {product?.price * (product?.quantity || 2)}
                </ProductPrice>
                <ProductPrice2>
                  <b> Rs.</b>{" "}
                  {((product?.price - (product?.price * (product.discountPercentage || 5 / 100))) * (product?.quantity || 2) + 0.0).toFixed(2)}
                </ProductPrice2>
              </Details>
            </ProductDetail>
          ))}
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
