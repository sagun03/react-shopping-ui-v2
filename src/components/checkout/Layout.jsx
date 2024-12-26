import { Wrapper, InnerWrapper, CartDetail, CartDetailMobile, LeftPanel } from "../address/styles";
import { Divider } from "@mui/material";
import { DividerStyles } from "./stepper/styles";
import StepperBox from "./stepper/StepperBox";
import Announcement from "../Announcement";
import NewsLetter from "../common/newsletter/NewsLetter";
import Footer from "../Footer";
import BottomNav from "../BottomNav";
import PropTypes from "prop-types";
import OrderSummary from "../OrderSummary";
import NavBar from "../nav/NavBar";

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
