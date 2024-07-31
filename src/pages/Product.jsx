import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import { useEffect, useState } from "react";
import { addProducts } from "../redux/cartRedux";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Alert from "../components/Alert";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import BottomNav from "../components/BottomNav";
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

const Product = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(false);
  const { products } = useDataContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      const product = products.find((product) => product.id === id);
      setProduct(product || {});
    }
  }, [id, products]);

  useEffect(() => {
    if (product.sizes && product.sizes.length > 0) {
      setSize(product.sizes[0].size); // Set default size from product data
    }
  }, [product]);

  const handleClick = () => {
    const selectedSize = product.sizes.find(s => s.size === size);
    dispatch(
      addProducts({
        ...product,
        quantity,
        img: selectedSize?.images[0],
        size,
        price: selectedSize?.price - selectedSize?.price * 0.05,
        productId: uuidv4(),
        originalPrice: selectedSize?.price
      })
    );
    // setOpenAlert(true);
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const selectedSize = product.sizes?.find(s => s.size === size) || {};

  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <ImgContainer>
          {selectedSize.images && <Image src={selectedSize.images[0]} alt={product.name} />}
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>{product.description}</Desc>
          {selectedSize.price && (
            <>
              <Price>Rs. {selectedSize.price}</Price>{" "}
              <span
                style={{
                  fontWeight: "100",
                  fontSize: "40px",
                  marginLeft: "10px"
                }}
              >
                Rs. {(selectedSize.price - selectedSize.price * 0.05).toFixed(2)}
              </span>
            </>
          )}
          <FilterContainer>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize
                value={size}
                onChange={(e) => setSize(e.target.value)}
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
      <NewsLetter />
      <Footer />
      {openAlert && (
        <Alert
          open={openAlert}
          type={"success"}
          message={"Your Product has been added into Cart"}
          setOpen={setOpenAlert}
        />
      )}
      <BottomNav />
    </Container>
  );
};

export default Product;
