import styled from "styled-components";

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
  width: 80%;
  padding: 0.5em;
  border-radius: 10px;
  background-color: rgba(250, 250, 250);
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
  background-color: rgba(250, 250, 250);
`
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  background-color: white;
`
export const SearchDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
