import styled from "styled-components";
import jk from "./images/jk.jpeg";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { FormHelperText } from "@mui/material";
import GoogleButton from "react-google-button";
import { Helmet } from "react-helmet-async";
import { useUserContext } from "../context/UserContext";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${jk}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const GoogleButtonContainer = styled.div`
  margin: 20px 0px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
export const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px 5px;
`;

const Login = () => {
  const { user, error: loginError, setError: setLoginError } = useUserContext();
  const { login, googleSignIn } = useUserAuth();
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const handleOnChange = (key, value) => {
    setUserInfo((state) => ({ ...state, [key]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email = "", password = "" } = userInfo;
    login(email, password);
  };
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn();
    navigate("/");
  };

  useEffect(() => { setLoginError(null) }, []);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user])

  return (
    <>
      <Helmet>
        <title>Login</title>
        <link rel="canonical" href="/login" />
      </Helmet>
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        {loginError && (
          <Title>
            <FormHelperText error={true}>{loginError}</FormHelperText>
          </Title>
        )}
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="email"
            onChange={(e) => handleOnChange("email", e.target.value)}
          />
          <Input
            placeholder="password"
            type={"password"}
            onChange={(e) => handleOnChange("password", e.target.value)}
          />
          <WrapperContainer>
            <Button>LOGIN</Button>
            <Agreement>DO NOT YOU REMEMBER THE PASSWORD?</Agreement>
            <RouterLink to="/register">
              <Link>CREATE A NEW ACCOUNT</Link>
            </RouterLink>
          </WrapperContainer>
        </Form>
        <WrapperContainer>
          <GoogleButtonContainer>
            <GoogleButton type="dark" onClick={handleGoogleSignIn} />
          </GoogleButtonContainer>
          <RouterLink to="/phonesignup">
            <Link>
              <Title>Sign in with phone</Title>
            </Link>
          </RouterLink>
        </WrapperContainer>
      </Wrapper>
    </Container>
    </>
  );
};

export default Login;
