import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Cart from "./pages/Cart";
import "./App.css";
import PhoneSignUp from "./pages/PhoneSignUp";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import ProductList from "./pages/ProductList";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import UserProfile from "./pages/UserProfile";
import ErrorBoundary from "./components/ErrorBoundary";
import AddressSwitch from "./pages/Checkout/AddressSwitch";
import PaymentSwitch from "./pages/Checkout/PaymentSwitch";
import CartSwitch from "./pages/Checkout/CartSwitch";
import OrderConfirmation from "./pages/OrderConfirmation";
import { fetchPromotionalBanner } from "./services/bannerService";
import { useDispatch, useSelector } from "react-redux";
import { setBanners } from "./store/slices/promotionBannerSlice";
import UserLogin from "./pages/Auth";
import Home from "./pages/Homepage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { setUser } from "./store/slices/userSlice";
import { useProducts } from "./hooks/useProducts";
import { useCategories } from "./hooks/useCategories";
import { setProducts, setCategories } from "./store/slices/productSlice"
import AboutUs from "./pages/AboutUs";

const App = () => {
  console.log("App.js");
  const banners = useSelector((state) => state.promotions.banners) || [];
  const { data: productsData } = useProducts()
  const { data: categoriesData } = useCategories()
  const categories = useSelector((state) => state.product.categories)
  const products = useSelector((state) => state.product.products)
  const dispatch = useDispatch();

  // get user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  // get products and categories
  useEffect(() => {
    if (categoriesData?.length > 0 && categories.length === 0) {
      dispatch(setCategories(categoriesData))
    }
    if (productsData?.length > 0 && products.length === 0) {
      dispatch(setProducts(productsData))
    }
  }, [dispatch, categoriesData, productsData])

  useEffect(() => {
    const getBanners = async () => {
      const promotionalBanners = await fetchPromotionalBanner();
      console.log("promotionalBanners", promotionalBanners);
      dispatch(setBanners([promotionalBanners]));
    };
    if (banners.length === 0) getBanners();
  }, [dispatch, banners.length]);

  return (
    <ErrorBoundary>
      <Router>
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/checkout/address" element={<AddressSwitch />} />
            <Route path="/checkout/payment" element={<PaymentSwitch />} />
            <Route path="/checkout/cart" element={<CartSwitch />} />
            <Route path="/orderconfirmation/:orderid" element={<OrderConfirmation />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Router>
    </ErrorBoundary>
  );
};

export default App;
