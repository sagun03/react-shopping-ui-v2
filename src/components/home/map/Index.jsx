import React from "react";
import Map from "@/assets/images/maps.png";
import { Wrapper, Heading, ImgContainer, Image } from "./styles";

const SimpleMap = () => {
  return (
    // Important! Always set the container height explicitly
    <>
      <Wrapper>
        <Heading>Come Visit Us</Heading>
      </Wrapper>
      <ImgContainer>
        <Image
          src={Map}
          alt="map"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/JK+DETERGENT+POWDER+AND+SOAP/@29.3236119,78.4971436,20z/data=!4m14!1m7!3m6!1s0x390bc86819fb8d33:0x7052b3e4be01f611!2sJK+DETERGENT+POWDER+AND+SOAP!8m2!3d29.3235856!4d78.4972448!16s%2Fg%2F11ckqr8k0t!3m5!1s0x390bc86819fb8d33:0x7052b3e4be01f611!8m2!3d29.3235856!4d78.4972448!16s%2Fg%2F11ckqr8k0t?entry=ttu",
              "_blank"
            )
          }
        />
      </ImgContainer>
    </>
  );
};

export default SimpleMap;
