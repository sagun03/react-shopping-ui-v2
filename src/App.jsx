import React, { Suspense } from "react";
// import Product from "./pages/Product";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import "./App.css";
import PhoneSignUp from "./pages/PhoneSignUp";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import ProductSearch from "./pages/ProductSearch";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import { DataProvider } from "./context/DataContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { CartProvider } from "./context/cartContext";
import { UserContextProvider } from "./context/UserContext";
import UserProfile from "./pages/UserProfile";
import Loader from "./components/Loader";
const Home = React.lazy(() => import("./pages/Homepage"));
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <UserAuthContextProvider>
          <DataProvider>
          <CartProvider>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Suspense
                      fallback={
                        <Loader />
                      }
                    >
                      <Home />
                    </Suspense>
                  }
                />
                <Route
                  path="/product/:id"
                  element={
                    <Product />
                  }
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/phonesignup" element={<PhoneSignUp />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/products" element={<ProductSearch />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/profile" element={<UserProfile />} />
              </Routes>
            </Router>
            </CartProvider>
          </DataProvider>
        </UserAuthContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
};

export default App;
