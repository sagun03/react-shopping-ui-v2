import {
  InputWrapper,
  ButtonWrapper,
  LinkWrappper,
  FormWrapper
} from "@/components/auth/styles";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../ErrorModal";
import { registerUser } from "@/utils/firebaseAuthCallers";

const Register = ({ setToggle }) => {
  const [userInfo, setUserInfo] = useState({})
  const [error, setError] = useState(null)
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
      await registerUser(email, password)
      navigate("/")
    } catch (err) {
      setUserInfo({})
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
