import React, { Suspense, useEffect } from "react";
// import Product from "./pages/Product";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import "./App.css";
import PhoneSignUp from "./pages/PhoneSignUp";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import ProductList from "./pages/ProductList";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import { DataProvider } from "./context/DataContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { CartProvider } from "./context/cartContext";
// import { OrderProvider } from "./context/orderContext";
import { UserContextProvider } from "./context/UserContext";
import UserProfile from "./pages/UserProfile";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";
import AddressSwitch from "./pages/Checkout/AddressSwitch";
import PaymentSwitch from "./pages/Checkout/PaymentSwitch";
import CartSwitch from "./pages/Checkout/CartSwitch";
import { StepperProvider } from "./context/StepperContext";
import OrderConfirmation from "./pages/OrderConfirmation";
import { AddressProvider } from "./components/address/DataProvider";
import { PointsContextProvider } from "./context/PointsContext";
import { fetchPromotionalBanner } from "./services/bannerService";
import { useDispatch, useSelector } from "react-redux";
import { setBanners } from "./redux/bannerRedux";
import UserLogin from "./pages/UserLogin";
const Home = React.lazy(() => import("./pages/Homepage"));
const queryClient = new QueryClient();

const App = () => {
  const banners = useSelector((state) => state.promotions.banners) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    const getBanners = async () => {
      const promotionalBanners = await fetchPromotionalBanner();
      console.log("promotionalBanners", promotionalBanners);
      dispatch(setBanners([promotionalBanners]));
    };
    if (banners.length === 0) getBanners();
  }, [dispatch, banners.length]);
  console.log("banners", banners)

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <UserContextProvider>
          <UserAuthContextProvider>
            <AddressProvider>
              <DataProvider>
                <CartProvider>
                  <StepperProvider>
                    <PointsContextProvider>
                      <Router>
                        <Routes>
                          <Route
                            path="/"
                            element={
                              <Suspense fallback={<Loader />}>
                                <Home />
                              </Suspense>
                            }
                          />
                          <Route path="/product/:id" element={<Product />} />
                          <Route path="/cart" element={<Cart />} />
                          <Route path="/login" element={<Login />} />
                          <Route path="/register" element={<Register />} />
                          <Route
                            path="/phonesignup"
                            element={<PhoneSignUp />}
                          />
                          <Route path="/orders" element={<Orders />} />
                          <Route path="/checkout" element={<Checkout />} />
                          <Route path="/products" element={<ProductList />} />
                          <Route path="/admin" element={<Admin />} />
                          <Route path="/profile" element={<UserProfile />} />
                          <Route
                            path="/checkout/address"
                            element={<AddressSwitch />}
                          />
                          <Route
                            path="/checkout/payment"
                            element={<PaymentSwitch />}
                          />
                          <Route
                            path="/checkout/cart"
                            element={<CartSwitch />}
                          />
                          <Route
                            path="/orderconfirmation/:orderid"
                            element={<OrderConfirmation />}
                          />
                          {/* <Route path="/PaymentWithElements" element={<PaymentWithElements />} /> */}
                        </Routes>
                      </Router>
                    </PointsContextProvider>
                  </StepperProvider>
                </CartProvider>
              </DataProvider>
            <DataProvider>
              <CartProvider>
                <StepperProvider>
                  <PointsContextProvider>
                    <Router>
                      <Routes>
                        <Route
                          path="/"
                          element={
                            <Suspense fallback={<Loader />}>
                              <Home />
                            </Suspense>
                          }
                        />
                        <Route path="/product/:id" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
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
                        <Route path="/new" element={<UserLogin />} />
                        {/* <Route path="/PaymentWithElements" element={<PaymentWithElements />} /> */}
                      </Routes>
                    </Router>
                  </PointsContextProvider>
                </StepperProvider>
              </CartProvider>
            </DataProvider>
            </AddressProvider>
          </UserAuthContextProvider>
        </UserContextProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default App;
