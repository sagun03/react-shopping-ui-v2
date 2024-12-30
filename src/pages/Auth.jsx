import {
  OverlayWrapper,
  Greet,
  Text,
  LogoImg,
  WelcomeSubtext
} from "@/components/auth/styles";
import Signin from "@/components/auth/Layout";
import logo from "@/assets/images/logo.png";

const Overlay = () => {
  return (
    <OverlayWrapper>
      <Greet>
        <LogoImg src={logo} alt="logo" />
        <Text>Welcome</Text>
        <WelcomeSubtext>We&apos;re happy to see you again.</WelcomeSubtext>
        <WelcomeSubtext>Access your account and explore a world of shopping possibilities with us.</WelcomeSubtext>
      </Greet>
      <Signin />
    </OverlayWrapper>
  )
}

export default Overlay;
