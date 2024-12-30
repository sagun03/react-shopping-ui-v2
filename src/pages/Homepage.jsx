import React from "react";
import PopularProducts from "@/components/home/popularProducts/Index";
import Footer from "@/components/common/layouts/Footer";
import NavBar from "@/components/common/navigation/Top/Index";
import NewsLetter from "@/components/common/newsletter/Index";
import FeaturedCategories from "@/components/home/featuredCategories/Layout";
import Virtual from "@/components/home/try-on/Virtual";
import Crousel from "@/components/home/crousel/Index";
import SimpleMap from "@/components/home/map/Index";
import Announcement from "@/components/common/annoucements/Index";
import { Helmet } from "react-helmet-async";
import Banner from "@/components/home/banner/Index";

const Homepage = () => {
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
