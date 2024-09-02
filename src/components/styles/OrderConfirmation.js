import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
  margin-top: 75px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #388e3c;
  margin: 30px 0px;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  margin-bottom: 5px;
`;

const OrderId = styled.p`
  font-size: 1rem;
  color: #ff9800;
  margin-bottom: 30px;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f44336;
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  margin: 10px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #d32f2f;
    transform: scale(1.05);
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const SectionButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff9800;
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  margin: 10px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #f57c00;
    transform: scale(1.05);
  }
`;

const AdditionalSection = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const AdditionalTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const AdditionalContent = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
`;

const Footer = styled.footer`
  margin-top: 50px;
  text-align: center;
  font-size: 0.9rem;
  color: #999;
`;

const Info = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;

  > div {
    padding: 20px 0;
    max-height: 300px;
    overflow-y: auto;
    gap: 20px;
    flex-direction: column;
    display: flex;
  }
`;

const OrderSummaryTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: #f96200;
`;

const SectionButtonContainer = styled.div`
  display: flex;
`;

export {
  Container,
  Title,
  Message,
  OrderId,
  Button,
  Section,
  SectionTitle,
  SectionButton,
  AdditionalSection,
  AdditionalTitle,
  AdditionalContent,
  Footer,
  Info,
  OrderSummaryTitle,
  SectionButtonContainer
};
