import { Wrapper, InnerWrapper, CartDetail, CartDetailMobile } from "../address/styles";
import { Divider } from "@mui/material";
import { DividerStyles } from "./styles";
import StepperBox from "./StepperBox";
import { StepperProvider } from "../../context/StepperContext";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <StepperBox />
      <Divider sx={DividerStyles}/>
      <InnerWrapper>
        { children }
        <Divider orientation="vertical" sx={{
          sm: { display: "none" }
        }}/>
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
