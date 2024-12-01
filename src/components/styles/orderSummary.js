import { Button } from "style-components";
import styled from "styled-components";

const Summary = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  padding: 30px;
  background-color: #ffffff;
  max-width: 400px;
  margin: 0px auto 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 25px;
  }
`;

const SummaryTitle = styled.h1`
  font-weight: 600;
  font-size: 1.8rem;
  color: #111;
  text-align: center;
  margin-bottom: 25px;
  border-bottom: 1px solid #e3e3e3;
  padding-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: ${(props) =>
    props.type === "total" ? "none" : "1px solid #e3e3e3"};
  font-weight: ${(props) => (props.type === "total" ? "700" : "400")};
  font-size: ${(props) => (props.type === "total" ? "1.4rem" : "1.1rem")};
  color: ${(props) => (props.type === "total" ? "#B12704" : "#565959")};

  @media (max-width: 768px) {
    font-size: ${(props) => (props.type === "total" ? "1.2rem" : "1rem")};
    margin: 15px 0;
  }
`;

const PriceText = styled.span`
  color: ${(props) => (props.discount ? "#B12704" : "#111")};
  margin-left: 15px;
  font-size: ${(props) => (props.type === "total" ? "1.4rem" : "1.1rem")};

  @media (max-width: 768px) {
    font-size: ${(props) => (props.type === "total" ? "1.2rem" : "1rem")};
  }
`;

const DiscountLink = styled.span`
  color: #007185;
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const CouponBadge = styled.div`
  display: flex;
  align-items: center;
  background-color: #dff0d8;
  color: #3c763d;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

const CustomButton = styled(Button)`
  width: 100%;
  background-color: #f0c14b !important;
  color: #111 !important;
  font-weight: 700 !important;
  font-size: 1.1rem !important;
  margin-top: 30px;
  padding: 12px !important;

  &:hover {
    background-color: #e7b32e !important;
  }
  
  cursor: ${(props) => (props.disabled ? "not-allowed !important" : "pointer")};

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 10px !important;
    font-size: 1rem !important;
  }
`;

export {
  Summary,
  SummaryTitle,
  SummaryItem,
  PriceText,
  DiscountLink,
  CouponBadge,
  CustomButton
}
