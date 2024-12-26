import {
  InputWrapper,
  ButtonWrapper,
  LinkWrappper,
  FormWrapper
} from "./styles";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import ErrorModal from "./ErrorModal";

const Register = ({ setToggle }) => {
  const [userInfo, setUserInfo] = useState({})
  const [error, setError] = useState(null)
  const { signUp } = useUserAuth()
  const navigate = useNavigate()

  const handleOnChange = (key, value) => {
    setUserInfo((state) => ({ ...state, [key]: value }))
  }
  const handleSubmit = async (e) => {
    try {
      setError("")
      e.preventDefault()
      const { email = "", password = "", confirmPassword = "" } = userInfo
      if (email === "" || password === "" || confirmPassword === "") {
        setError("Please fill all the fields")
        return
      }
      if (password !== confirmPassword) {
        setError("Password doesn't match")
        return
      }
      if (error) {
        alert("please resolve error first")
        return
      }
      await signUp(email, password)
      navigate("/")
    } catch (err) {
      setUserInfo({})
      setError(err.message)
    }
  }

  const handleToggle = () => {
    setToggle(0);
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {
        error && (<ErrorModal error={error} setError={setError} />)
      }
      <InputWrapper type="email" placeholder="Email" onChange={(e) => handleOnChange("email", e.target.value)}/>
      <InputWrapper type="password" placeholder="Password" onChange={(e) => handleOnChange("password", e.target.value)}/>
      <InputWrapper type="password" placeholder="Confirm Password" onChange={(e) => handleOnChange("confirmPassword", e.target.value)}/>
      <ButtonWrapper type="submit">Register</ButtonWrapper>
      <LinkWrappper onClick={handleToggle} className="expandedXL">Sign in</LinkWrappper>
    </FormWrapper>
  )
}

Register.propTypes = {
  setToggle: PropTypes.func
}

export default Register;
