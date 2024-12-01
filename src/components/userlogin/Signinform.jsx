import {
  FormWrapper,
  InputWrapper,
  ButtonWrapper,
  LinkWrappper
} from "./styles";
import PropTypes from "prop-types";
import ErrorModal from "./ErrorModal";
import { useUserContext } from "../../context/UserContext";
import { useUserAuth } from "../../context/UserAuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signinform = ({ setToggle }) => {
  const { user, error: loginError, setError: setLoginError } = useUserContext();
  const { login } = useUserAuth();
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const handleOnChange = (key, value) => {
    setUserInfo((state) => ({ ...state, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email = "", password = "" } = userInfo;
    if (email === "" || password === "") {
      setLoginError("Please fill all the fields");
      return;
    }
    login(email, password);
  };

  useEffect(() => { setLoginError(null) }, []);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user])

  const handleToggle = () => {
    setToggle(2);
  }
  return (
    <FormWrapper onSubmit={handleSubmit}>
      {
        loginError && <ErrorModal error={loginError} setError={setLoginError}/>
      }
      <InputWrapper type="email" placeholder="Email" onChange={(e) => handleOnChange("email", e.target.value)}/>
      <InputWrapper type="password" placeholder="Password" onChange={(e) => handleOnChange("password", e.target.value)}/>
      <ButtonWrapper type="submit">Sign In</ButtonWrapper>
      <LinkWrappper onClick={handleToggle} className="expanded">Don&lsquo;t have account, click here</LinkWrappper>
    </FormWrapper>
  )
}

Signinform.propTypes = {
  setToggle: PropTypes.func
}

export default Signinform;
