import {
  FormWrapper,
  InputWrapper,
  ButtonWrapper,
  LinkWrappper
} from "@/components/auth/styles";
import PropTypes from "prop-types";
import ErrorModal from "@/components/auth/ErrorModal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "@/store/slices/userSlice";
import { loginUser } from "@/utils/firebaseAuthCallers";

const Signinform = ({ setToggle }) => {
  const user = useSelector((state) => state.user.currentUser);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const handleOnChange = (key, value) => {
    setUserInfo((state) => ({ ...state, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email = "", password = "" } = userInfo;
    if (email === "" || password === "") {
      dispatchEvent(setError("Please fill all the fields"));
      return;
    }
    loginUser(email, password);
  };

  useEffect(() => { dispatch(setError(null)) }, []);

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
        error && <ErrorModal />
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
