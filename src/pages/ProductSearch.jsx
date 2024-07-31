import NavBar from "../components/NavBar"
import ProductsRange from "../components/ProductsRange"
import Announcement from "../components/Announcement"
import BottomNav from "../components/BottomNav"
import { Helmet } from "react-helmet-async"

const ProductSearch = () => {
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
      <BottomNav />
    </>
  )
}

export default ProductSearch
