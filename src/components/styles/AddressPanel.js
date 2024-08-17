import styled from "styled-components";
import { lScreen, mobile } from "../../responsive";

export const AddressPanelContainer = styled.div`
  display: grid;
  margin-top: 20px;
  ${mobile({
    padding: " 0 15px",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px"
  })}
  ${lScreen({
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "20px"
  })}
`;

export const AddAdressBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #e0e0e0;
  background-color: #e0e0e0;
  padding: 15px;
`;

export const ModalContainer = styled.div`
  background-color: transparent;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  top: 50px;
  width: 100vw;
  height: 100vh;
`;

export const InnerWrapper = styled.div`
  max-width: 300px;
  background-color: #FFF;
  display: flex;
  margin: 30px;
  padding: 20px;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1), -10px -10px 10px white ;
  font-family: Arial;
  font-size: 1.2em;
  color: black;
  overflow: auto;
  line-height: 1.5em;
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
`;
