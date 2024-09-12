import styled from "styled-components";
import StarRateIcon from "@mui/icons-material/StarRate";
import { mobile } from "../../responsive";
import { styled as MUIStyled } from "@mui/system";

export const SearchContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 60px;
  gap: 3px;
  padding: 5px 10px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
    color: red;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  z-index: 10000;
  position: fixed;
  top: 74px;
  // padding-top: 75px;
  height: 100vh;
  width: 100%;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
`
export const SearchClose = styled.div`
  width: 100%;
  width: fit-content;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  flex: 1 0 1;
`
export const ModalChild = styled.div`
  display: flex;
  width: clamp(300px, 150vw, 600px);
  height: fit-content;
  padding: 0.5em;
  border-radius: 10px;
  background-color: rgba(255, 255, 255);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
export const SearchBoxWrapper = styled.div`
  display: flex;
  width: 100%;
`
export const FieldStyles = styled.input`
  padding: 0.5em;
  font-size: 1.1em;
  flex: 10 1 0;
  border: 1px solid teal;
  outline: none;
  border: none;
  "&:focus": {
    border: none;
    outline: none;
  }
  background-color: rgba(255, 255, 255);
`
export const CardContainer = styled.div`
  display: flex;
  font-size: 1.3em;
  padding: 0.5em;
  flex-direction: column;
  min-heigth: fit-content;
  gap: 5px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`
export const SearchDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  max-height: fit-content;
  gap: 5px;
  border-radius: 10px;
  padding: 0 0.1em;
  font-size: clamp(0.8em, 1vw, 16px);
  fonrWeight: 200;
  cursor: pointer;
  &:hover{
    background-color: rgba(0, 0, 0, 0.1);
  }
`
export const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
  margin-right: -0.5em;
  border-radius: 10px;
  flex: 0.6 1 0;
  // border: 2px solid black;
  ${mobile({ flex: "1 1 0" })}
`
export const CardImage = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 10px;
  object-fit: contain;
`
export const CardContent = styled.div`
  display: flex;
  line-height: 25px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0.5em;
  flex: 4 1 0;
  color: "rgba(0, 0, 0, 0.8)";
`
export const CardRating = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const StarIcon = MUIStyled(StarRateIcon)({
  color: "rgba(255, 215, 0, 0.8)",
  fontSize: "1.2em"
})
