import { useEffect, useState } from "react";
import {
  DetailWrapper,
  QuickGroup,
  GroupIcon,
  InnerWrapper
} from "./styles";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Phoneform from "./Phoneform";
import Signinform from "./Signinform";
import Register from "./Register";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { ErrorBoxContainer } from "../address/styles";
import { useUserContext } from "../../context/UserContext";

const Signin = () => {
  const [toggle, setToggle] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [expandedXL, setExpandedXL] = useState(false);
  const { googleSignIn } = useUserAuth();
  const { user, error: loginError, setError: setLoginError } = useUserContext();
  const navigate = useNavigate();

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn();
  };

  useEffect(() => {
    if (toggle === 0) {
      setExpanded(true);
      setExpandedXL(false);
    } else if (toggle === 2) {
      setExpandedXL(true);
      setExpanded(false);
    } else {
      setExpandedXL(false);
      setExpanded(false);
    }
  }, [toggle]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const slideToPhone = () => {
    setToggle(1);
  }

  return (
    <DetailWrapper className={expandedXL ? "expandedXL" : ""}>
      <InnerWrapper className={expandedXL ? "expandedXL" : expanded ? "expanded" : ""}>
        {
          toggle === 0 ? (
            <Signinform setToggle={setToggle}/>
          ) : (
            toggle === 1 ? (
              <Phoneform setToggle={setToggle}/>
            ) : toggle === 2 ? <Register setToggle={setToggle}/> : null)
        }
        <QuickGroup>
          <GroupIcon onClick={handleGoogleSignIn}>
            <GoogleIcon/>
          </GroupIcon>
          <GroupIcon onClick={slideToPhone}>
            <PhoneIphoneIcon />
          </GroupIcon>
        </QuickGroup>
      </InnerWrapper>
    </DetailWrapper>
  )
}

export default Signin;
