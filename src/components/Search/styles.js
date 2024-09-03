import styled from "styled-components";
import StarRateIcon from "@mui/icons-material/StarRate";
import { mobile } from "../../responsive";
import { styled as MUIStyled } from "@mui/system";

export const SearchContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;
`
export const ModalContainer = styled.div`
  display: flex;
  z-index: 10000;
  position: fixed;
  top: 78px;
  width: 100%;
  justify-content: center;
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
  width: clamp(300px, 50vw, 500px);
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
  flex-direction: column;
  gap: 10px;
  margin-top: 1em;
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
  max-height: 90px;
  gap: 5px;
  border-radius: 10px;
  padding: 0.5em;
  font-size: clamp(0.8em, 1vw, 16px);
  fonrWeight: 200;
  cursor: pointer;
  &:hover{
    background-color: rgba(0, 0, 0, 0.1);
  }
`
export const CardImageContainer = styled.div`
  display: flex;
  padding: 0;
  margin-right: -0.5em;
  border-radius: 10px;
  flex: 0.75 1 0;]
  ${mobile({ flex: "1 1 0" })}
`
export const CardImage = styled.img`
  width: clamp(50px, 70px, 80%);
  border-radius: 10px;
  object-fit: fill;
`
export const CardContent = styled.div`
  display: flex;
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
