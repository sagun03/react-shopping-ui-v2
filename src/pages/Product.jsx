import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import { useEffect, useState } from "react";
// import { addProducts } from "../redux/cartRedux";
// import { useDispatch } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
import Alert from "../components/Alert";
import { Link, useParams } from "react-router-dom";
import { Divider, IconButton } from "@mui/material";
import BottomNav from "../components/BottomNav";
import Review from "../components/Review";
import SimilarProducts from "../components/SimilarProducts"; // Import SimilarProducts component
import { useCreateCart } from "../hooks/useCart";
// import { useUserAuth } from "../context/UserAuthContext";
import { useUserContext } from "../context/UserContext";
import { useDataContext } from "../context/DataContext";
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
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
  Button
} from "../components/styles/Product";
import Loader from "../components/Loader";

const Product = () => {
  const { user } = useUserContext();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const { products } = useDataContext();
  const { mutate: createCart } = useCreateCart();
  const urlSize = localStorage.getItem("size");
  const selectedSize = product.sizes?.find((s) => s.size === size) || {};

  useEffect(() => {
    if (id) {
      const product = products.find((product) => product.id === id);
      setProduct(product || {});
      setQuantity(1)
    }
  }, [id, products]);

  useEffect(() => {
    if (product.sizes && product.sizes.length > 0) {
      if (urlSize) {
        const matchedSize = product.sizes.find(s => s.size === urlSize);
        setSize(matchedSize ? matchedSize.size : product.sizes[0].size);
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
    const productObject = {
      userId: user?.uid,
      Products: [
        {
          productID: product?.id,
          quantity,
          unitPrice: selectedSize?.price,
          size
        }
      ]
    };
    createCart({
      cartDetails: productObject,
      userID: user?.uid,
      setOpenAlert
    });
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
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

  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        {openAlert && (
          <Alert
            open={openAlert}
            type={"success"}
            message={"Your Product has been added to the cart"}
            setOpen={setOpenAlert}
          />
        )}
        <ImgContainer>
          {selectedSize.images && (
            <Image src={selectedSize.images[0]} alt={product.name} />
          )}
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>{product.description}</Desc>
          {selectedSize.price && (
            <>
              <Price>Rs. {selectedSize.price}</Price>
              <span
                style={{
                  fontWeight: "100",
                  fontSize: "40px",
                  marginLeft: "10px"
                }}
              >
                Rs.{" "}
                {(selectedSize.price - selectedSize.price * 0.05).toFixed(2)}
              </span>
            </>
          )}
          <FilterContainer>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize
                value={size}
                onChange={handleSizeChange}
              >
                {product.sizes?.map((s, index) => (
                  <FilterSizeOption key={index} value={s.size}>
                    {s.size}
                  </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <IconButton disabled={quantity === 1}>
                <Remove onClick={() => handleQuantity("dec")} />
              </IconButton>
              <Amount>{quantity}</Amount>
              <IconButton>
                <Add onClick={() => handleQuantity("add")} />
              </IconButton>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
            <Link to="/cart">
              <Button>GO TO CART</Button>
            </Link>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Divider sx={{ marginTop: "4rem" }} />
      <SimilarProducts currentProduct={product} />
      <Divider sx={{ marginTop: "4rem" }} />
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
