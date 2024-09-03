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
          <CartDetail />
          <CartDetailMobile />
        </InnerWrapper>
      </Wrapper>
      <NewsLetter />
      <Footer />
      <BottomNav />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
