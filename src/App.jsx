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
import Loader from "./components/Loader";
// const Product = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./pages/Product")), 1000);
//   });
// });
const Home = React.lazy(() => import("./pages/Homepage"));
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserAuthContextProvider>
        <DataProvider>
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
                  // <Suspense
                  //   fallback={
                  //     <div
                  //       style={{
                  //         display: "block",
                  //         position: "absolute",
                  //         top: "50%",
                  //         left: "50%",
                  //       }}
                  //     >
                  //       <Loader />
                  //     </div>
                  //   }
                  // >
                  //   <Product />
                  // </Suspense>
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
            </Routes>
          </Router>
        </DataProvider>
      </UserAuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
