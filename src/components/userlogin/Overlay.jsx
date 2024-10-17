import { useState } from "react";
import {
  OverlayWrapper,
  Greet,
  Text
} from "./styles";
import Signin from "./Signin";

const Overlay = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <OverlayWrapper>
      <Greet>
        <Text>Welcome</Text>
      </Greet>
      <Signin />
    </OverlayWrapper>
  )
}

export default Overlay;
