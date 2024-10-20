import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Divider, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import Loader from "../components/Loader";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/nav/NavBar";
import NewsLetter from "../components/NewsLetter";
import Alert from "../components/Alert";
import BottomNav from "../components/BottomNav";
import { useDataContext } from "../context/DataContext";
import { useUserContext } from "../context/UserContext";
import Review from "../components/Review"; // Import Review component

import {
  Container,
  Wrapper,
  ImgContainer,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  ThumbnailContainer,
  Thumbnail,
  CarouselContainer,
  ZoomImage,
  OverallRatingContainer,
  RatingStars,
  PriceContainer,
  DiscountedPrice,
  DiscountText,
  CustomButton,
  ButtonContainer,
  ButtonWrapper,
  AddToCartIcon,
  LeftInfoContainer,
  DiscountPercentageContainer,
  StyledLink
} from "../components/styles/Product";
import SimilarProducts from "../components/SimilarProducts";
import { Icon } from "../components/styles/ProductRangeCard";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/cartRedux";

const Product = () => {
  const { user } = useUserContext();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { products } = useDataContext();
  const urlSize = localStorage.getItem("size");
  const selectedSize = product.sizes?.find((s) => s.size === size) || {};
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const product = products.find((product) => product.id === id);
      setProduct(product || {});
      setQuantity(1);
    }
  }, [id, products]);

  useEffect(() => {
    if (product.sizes && product.sizes.length > 0) {
      if (urlSize) {
        const matchedSize = product.sizes.find((s) => s.size === urlSize);
        setSize(matchedSize ? matchedSize.size : product.sizes[0].size);
        setSelectedImage(matchedSize?.images[0]);
      } else {
        setSize(product.sizes[0].size);
      }
    }
  }, [product.sizes, urlSize]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, [product, id]);

  const handleClick = () => {
    console.log("product", product, selectedSize);
    const productObject = {
      productId: product?.id,
      quantity,
      unitPrice: selectedSize?.price,
      size: selectedSize?.size,
      name: product?.name,
      image: selectedSize?.images[0],
      description: product?.description
    };

    dispatch(addProducts(productObject));
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setSize(newSize);
    localStorage.setItem("size", newSize);
  };

  if (!product.id) {
    return <p>Product not found.</p>;
  }

  if (isLoading) {
    return <Loader />;
  }
  const discount = product.discountPercentage || 5;
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        {openAlert && (
          <Alert
            open={openAlert}
            type={"success"}
            message={"Your Product has been added to the cart."}
            setOpen={setOpenAlert}
          />
        )}
        <ImgContainer>
          <ThumbnailContainer>
            {selectedSize?.images.map((img, index) => (
              <Thumbnail
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => setSelectedImage(img)}
                active={selectedImage === img}
              />
            ))}
          </ThumbnailContainer>
          <CarouselContainer>
            <ZoomImage src={selectedImage} alt={product.name} />
          </CarouselContainer>
        </ImgContainer>
        <InfoContainer>
          <LeftInfoContainer>
            <Title>{product.name}</Title>
            <Divider
              sx={{ marginTop: "1.5rem", borderBottomWidth: "medium" }}
            />
            <OverallRatingContainer>
              <RatingStars>
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{
                      color: index < product.averageRating ? "black" : "grey"
                    }}
                  >
                    {index < product.averageRating ? "★" : "☆"}
                  </span>
                ))}
                <span
                  style={{
                    color: "grey",
                    fontSize: "1.5rem",
                    marginLeft: ".5rem"
                  }}
                >
                  ({product.ratingCount})
                </span>
              </RatingStars>
            </OverallRatingContainer>
            <Desc>
              {showFullDescription
                ? product.description
                : `${product.description?.substring(0, 300)}...`}
              {product.description && product.description.length > 300 && (
                <span
                  style={{
                    textDecoration: "underline",
                    fontWeight: 600,
                    cursor: "pointer",
                    marginLeft: "10px"
                  }}
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? "Show less" : "Read full description"}
                </span>
              )}
            </Desc>
            <PriceContainer>
              <DiscountPercentageContainer>
                <Price>Rs. {selectedSize?.price}</Price>
                <DiscountedPrice>
                  Rs.{" "}
                  {selectedSize?.price - selectedSize?.price * (discount / 100)}
                </DiscountedPrice>
              </DiscountPercentageContainer>
              <DiscountText>{discount}% OFF</DiscountText>
            </PriceContainer>
            {product.sizes && product.sizes.length > 0 && (
              <>
                <FilterContainer>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "1rem"
                    }}
                  >
                    <Filter>
                      <FilterTitle>Size: </FilterTitle>
                      <FilterSize value={size} onChange={handleSizeChange}>
                        {product.sizes?.map((s, index) => (
                          <FilterSizeOption key={index} value={s.size}>
                            {s.size}
                          </FilterSizeOption>
                        ))}
                      </FilterSize>
                    </Filter>
                  </div>
                </FilterContainer>
              </>
            )}
            <AddContainer>
              <AmountContainer>
                <IconButton disabled={quantity === 1}>
                  <Remove onClick={() => handleQuantity("dec")} style={{ height: "2rem", width: "2rem" }} />
                </IconButton>
                <Amount>{quantity}</Amount>
                <IconButton>
                  <Add onClick={() => handleQuantity("add")} style={{ height: "2rem", width: "2rem" }} />
                </IconButton>
              </AmountContainer>
            </AddContainer>
          </LeftInfoContainer>
          <ButtonContainer>
            <Divider
              sx={{ marginBottom: "1.5rem", borderBottomWidth: "medium" }}
            />
            <ButtonWrapper>
              <StyledLink to="/cart">
                <CustomButton variant="border">GO TO CART</CustomButton>
              </StyledLink>
              <CustomButton onClick={handleClick}>
                ADD TO CART{" "}
                <Icon>
                  <AddToCartIcon />
                </Icon>
              </CustomButton>
            </ButtonWrapper>
          </ButtonContainer>
        </InfoContainer>
      </Wrapper>
      <Divider sx={{ marginTop: "4rem" }} />
      <SimilarProducts currentProduct={product} />
      {/* <Divider sx={{ marginTop: "4rem" }} /> */}
      <Review
        productId={product.id}
        userId={user?.uid}
        userName={user?.displayName}
      />
      <NewsLetter />
      <Footer />
      <BottomNav />
    </Container>
  );
};

export default Product;
