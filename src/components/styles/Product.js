import { mobile, tablet, ScreenWith670px } from "../../responsive";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 75px;
  ${mobile({ marginTop: "85px" })}
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
  ${tablet({ padding: "10px", flexDirection: "column" })}
  min-height: 60vh;
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 55vh;
  object-fit: contain;
  ${mobile({ height: "35vh", width: "60%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${ScreenWith670px({ padding: "0px 10px 0px 50px" })}
  ${mobile({ padding: "20px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  text-decoration: line-through;
  color: #615f5f;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  ${mobile({ width: "50%", flexDirection: "column" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  &:hover {
    background-color: #f8f4f4;
  }
`;

export { Container, Wrapper, ImgContainer, Image, InfoContainer, Title, Desc, Price, FilterContainer, Filter, FilterTitle, FilterSize, FilterSizeOption, AddContainer, AmountContainer, Amount, Button };
