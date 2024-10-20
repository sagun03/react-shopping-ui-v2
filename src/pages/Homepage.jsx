import React, { useEffect } from "react";
// import Announcement from "../components/Announcement";
import PopularProducts from "../components/PopularProducts";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
// import Products from "../components/Products";
import FeaturedCategories from "../components/FeaturedCategories";
import Virtual from "../components/Virtual";
import Crousel from "../components/Crousel";
import SimpleMap from "../components/Map";
import Announcement from "../components/Announcement";
import BottomNav from "../components/BottomNav";
import { Helmet } from "react-helmet-async"
import { useCartContext } from "../context/cartContext";
import useFetchCartData from "../hooks/custom hooks/useFetchCartData";
import { useUserContext } from "../context/UserContext";
import Banner from "../components/Banner";

const Homepage = () => {
  const { user } = useUserContext()
  const { setCartData, cartData } = useCartContext();

  const dataFetched = useFetchCartData(user);

  useEffect(() => {
    console.log(dataFetched, "dataFetched")
    if (cartData.length === 0 && dataFetched && user) {
      setCartData(dataFetched);
    }
  }, [cartData, dataFetched, setCartData]);
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
        <BottomNav />
      </div>
    </>
  );
}
export default Homepage;
