import NavBar from "@/components/common/navigation/Top/Index";
import ProductsRange from "@/components/product/product-range/Index";
import Announcement from "@/components/common/annoucements/Index";
// import BottomNav from "../components/BottomNav"
import { Helmet } from "react-helmet-async"

const ProductList = () => {
  return (
    <>
       <Helmet>
        <title>Products Page</title>
        <meta name="description" content="Search for Products in this page" />
        <link rel="canonical" href="/products" />
      </Helmet>
      <NavBar />
      <Announcement />
      <ProductsRange />
      {/* <BottomNav /> */}
    </>
  )
}

export default ProductList
