import { Wrapper, InnerWrapper, CartDetail, CartDetailMobile, LeftPanel } from "../address/styles";
import { Divider } from "@mui/material";
import { DividerStyles } from "./styles";
import StepperBox from "./StepperBox";
import NavBar from "../NavBar";
import Announcement from "../Announcement";
import NewsLetter from "../NewsLetter";
import Footer from "../Footer";
import BottomNav from "../BottomNav";
import PropTypes from "prop-types";
import OrderSummary from "../OrderSummary";
import { useEffect, useRef, useState } from "react";

const Layout = ({ children }) => {
  const layoutRef = useRef(null);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element goes out of view, remove fixed position
        console.log("entry", entry);
        setIsFixed(entry.isIntersecting);
      },
      {
        root: null, // relative to the viewport
        threshold: 1 // trigger when the element goes completely out of view
      }
    );

    if (layoutRef.current) {
      observer.observe(layoutRef.current);
    }

    return () => {
      if (layoutRef.current) {
        observer.unobserve(layoutRef.current);
      }
    };
  }, []);
  console.log("isFixed", isFixed)
  return (
    <>
      <NavBar />
      <Announcement />
      <Wrapper>
        <StepperBox />
        <Divider sx={DividerStyles}/>
        <InnerWrapper ref={layoutRef} >
          <LeftPanel>
            { children }
          </LeftPanel>
          <CartDetail>
            <div style={{
              position: "sticky",
              top: "30%"
            }}>
              <OrderSummary />
            </div>
          </CartDetail>
          <CartDetailMobile ><OrderSummary /></CartDetailMobile>
        </InnerWrapper>
      </Wrapper>
      <NewsLetter />
      <Footer />
      <BottomNav />
    </>
    // <Wrapper>
    //   <StepperBox />
    //   {/* <Divider sx={DividerStyles}/> */}
    //   {/* <InnerWrapper> */}
    //     { children }
    //     {/* <Divider orientation="vertical" sx={{
    //       sm: { display: "none" }
    //     }}/> */}
    //     {/* <CartDetail /> */}
    //     {/* <CartDetailMobile /> */}
    //   {/* </InnerWrapper> */}
    // </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
