import { Wrapper, InnerWrapper } from "../address/styles";
import StepperBox from "./StepperBox";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <StepperBox />
      {/* <Divider sx={DividerStyles}/> */}
      <InnerWrapper>
        { children }
        {/* <Divider orientation="vertical" sx={{
          sm: { display: "none" }
        }}/> */}
        {/* <CartDetail /> */}
        {/* <CartDetailMobile /> */}
      </InnerWrapper>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
