import { Wrapper, InnerWrapper, CartDetail, CartDetailMobile, LeftPanel } from "../address/styles";
import { Divider } from "@mui/material";
import { DividerStyles } from "./styles";
import StepperBox from "./StepperBox";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
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
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
