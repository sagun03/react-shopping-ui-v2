import Form from "../components/address/Form";
import { AddressProvider } from "../components/address/DataProvider";
import { Wrapper, InnerWrapper, CartDetail, CartDetailMobile } from "../components/address/styles";
import { Divider } from "@mui/material";
import { DividerStyles } from "../components/checkout/styles";
import StepperBox from "../components/checkout/StepperBox";

export const Layout = () => {
  return (
    <Wrapper>
      <StepperBox />
      <Divider sx={DividerStyles}/>
      <InnerWrapper>
        <AddressProvider>
          <Form />
        </AddressProvider>
        <Divider orientation="vertical" sx={{
          sm: { display: "none" }
        }}/>
        <CartDetail />
        <CartDetailMobile />
      </InnerWrapper>
    </Wrapper>
  );
};
