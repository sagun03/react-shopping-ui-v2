import styled from "styled-components";
import { mobile } from "../../responsive";

const ErrorPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ece9e6 0%, #ffffff 100%);
  padding: 20px;
 ${mobile({ padding: "30px" })}
`;

const ErrorContent = styled.div`
  text-align: center;
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;

`;

const ErrorTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

   ${mobile({ fontSize: "2rem" })}

`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;

    ${mobile({ fontSize: "1rem" })}

`;

const ErrorDetails = styled.pre`
  margin: 20px 0;
  padding: 15px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  white-space: pre-wrap;
  max-width: 100%;
  overflow-x: auto;
`;

const ErrorActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
   ${mobile({ flexDirection: "column", alignItems: "center", gap: "10px" })}
`;

const ActionLink = styled.a`
  text-decoration: none;
  color: white;
  background-color: #007bff;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 650px) {
    width: fit-content;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: white;
  background-color: #007bff;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 650px) {
    width: fit-content;
    text-align: center;
  }
`;

export {
  ErrorPageContainer,
  ErrorContent,
  ErrorTitle,
  ErrorMessage,
  ErrorDetails,
  ErrorActions,
  ActionLink,
  ContactLink
};
