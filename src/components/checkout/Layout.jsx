import { Wrapper, InnerWrapper, CartDetail, CartDetailMobile, LeftPanel } from "@/components/checkout/address/styles";
import { Divider } from "@mui/material";
import { DividerStyles } from "./stepper/styles";
import StepperBox from "./stepper/Index";
import Announcement from "@/components/common/annoucements/Index";
import NewsLetter from "@/components/common/newsletter/Index";
import Footer from "@/components/common/layouts/Footer";
// import BottomNav from "@/components/common/navigation/Bottom";
import PropTypes from "prop-types";
import OrderSummary from "@/components/checkout/summary/Index";
import NavBar from "@/components/common/navigation/Top/Index";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Announcement />
      <Wrapper>
        <StepperBox />
        <Divider sx={DividerStyles}/>
        <InnerWrapper>
          <LeftPanel>
            { children }
          </LeftPanel>
          <CartDetail>
            <div style={{
              position: "sticky",
              top: "20%"
            }}>
              <OrderSummary />
            </div>
          </CartDetail>
          <CartDetailMobile ><OrderSummary /></CartDetailMobile>
        </InnerWrapper>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
