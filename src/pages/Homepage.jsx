import React, { useEffect } from "react";
import PopularProducts from "../components/PopularProducts";
import Footer from "../components/Footer";
import NavBar from "../components/nav/NavBar";
import NewsLetter from "../components/common/newsletter/NewsLetter";
import FeaturedCategories from "../components/home/featured-categories/styles";
import Virtual from "../components/home/try-on/Virtual";
import Crousel from "../components/Crousel";
import SimpleMap from "../components/home/Map";
import Announcement from "../components/Announcement";
import { Helmet } from "react-helmet-async"
// import { useCartContext } from "../context/cartContext";
import useFetchCartData from "../hooks/custom/useFetchCartData";
// import { useUserContext } from "../context/UserContext";
import Banner from "../components/home/banner/Index";
import { useSelector, useDispatch } from "react-redux";
import { setCartData } from "../store/slices/cartSlice";

const Homepage = () => {
  const dispatch = useDispatch();
  // const { user } = useUserContext()
  const user = useSelector((state) => state.user.currentUser);
  console.log("user", user)
  // const { setCartData, cartData } = useCartContext();

  const cartData = useSelector((state) => state.cart.cartData);
  // const dataFetched = useFetchCartData(user);

  // useEffect(() => {
  //   if (cartData.length === 0 && dataFetched && user) {
  //     dispatch(setCartData(dataFetched));
  //   }
  // }, [cartData, dataFetched, setCartData]);

  return (
    <>
      <Helmet>
        <title>The JK products</title>
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://thejkproducts.com/",
          "name": "The JK Products",
          "logo": "/logo.png",
          "@id": "#b2c-store-org"
        }`}
        </script>
        <script type="application/ld+json">
          {`{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.example.com/",
        "potentialAction": [{
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://thejkproducts.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },{
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "android-app://com.example/https/thejkproducts.com/search/?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }]
      }`}
        </script>
        <meta
          name="description"
          content="One stop shop for all cleaning products"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div style={{ overflow: "auto" }}>
        <NavBar />
        <Announcement />
        <Crousel />
        <FeaturedCategories />
        <PopularProducts />
        <Banner />
        <Virtual />
        <SimpleMap />
        <NewsLetter />
        <Footer />
        {/* <BottomNav /> */}
      </div>
    </>
  );
}
export default Homepage;
