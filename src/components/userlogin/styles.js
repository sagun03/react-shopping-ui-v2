import styled, { keyframes } from "styled-components";
import { classes } from "mui-tel-input";
import { mobile, ScreenWith1200px, ScreenWith1470px, ScreenWith670px } from "../../responsive";

export const OverlayWrapper = styled.div`
  width: 100vw;
  height: 100vh !important;
  position: relative;
  overflow: hidden;
  :before {
    content: "";
    position: absolute;
    transform: translate(0, 0);
    right: 45%;
    top: 0;
    height: 100vh;
    width: 300vw;
    background: linear-gradient(180deg, #2bb8ff, #1a2999);
    transition: 1s ease-in-out;
    z-index: 6;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-bottom-right-radius: max(50vw, 50vh);
    border-top-left-radius: max(50vw, 50vh);

    @keyframes move {
      0% {
        transform: translate(35%, 0);
        right: 0;
      }
      100% {
        transform: translate(0, 0);
        right: 45%;
      }
    }

    animation: move 1s ease-in-out;

    @media (max-width: 500px) {
      @keyframes move {
        0% {
          transform: translate(0, 0);
          right: 45%;
        }
        100% {
          transform: translate(35%, 0);
          right: 0;
        }
      }
      transform: translate(35%, 0);
      right: 0;
      width: 400vw;
    }
  }
`;

export const Text = styled.div`
  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const LogoImg = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
  cursor: pointer;
  filter: brightness(1.3);
  animation: ${zoomIn} 1s ease-in-out;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .${classes.textField} {
    width: calc(100% + 15px);
  }
  .${classes.textField} > div {
    border-radius: 10px !important;
    margin-bottom: 15px;
  }

  @keyframes moveDesktop {
    0% {
      transform: translate(150px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes moveMobile {
    0% {
      transform: translate(-150px, 0);
    }
    100% {
      scale: 0.8;
      transform: translate(0, 0);
    }
  }

  @media (min-width: 501px) {
    animation: moveDesktop 0.5s ease-in-out;
  }
  @media (max-width: 500px) {
    transform: scale(0.85);
    transition: transform 0.5s ease-in-out;
    animation: moveMobile 0.5s ease-in-out;
  }
`;

export const LinkWrappper = styled.button`
  width: fit-content;
  background-color: transparent;
  color: #2668c6;
  font-size: 1em;
  cursor: pointer;
  text-decoration: underline;
  border: none;
  margin-top: 10px;

  @media (max-width: 500px) {
    margin-bottom: 15px;
    font-size: 1.1em;

    &.expanded {
      margin-bottom: 2px;
    }
    &.expandedXL {
      margin-bottom: 5px;
    }
  }
`;

const fadeInSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Greet = styled.div`
  width: 50%;
  height: 70vh;
  position: relative;
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  font-weight: 700;
  color: white;
  display: flex;
  flex-direction: column;
  animation: ${fadeInSlideUp} 1s ease-in-out;

  @media (max-width: 500px) {
    width: 100%;
    height: 40vh;
    font-size: 2em;
    text-align: top;
  }
`;
export const WelcomeSubtext = styled.p`
  font-size: 1.4rem;
  backgroundCOlor: #2bb8ff;
  margin-top: 10px;
  text-align: center;
  padding: 0 20px;
  
  ${mobile({ fontSize: ".4rem" })}
  ${ScreenWith670px({ fontSize: ".6rem" })}
  ${ScreenWith1200px({ fontSize: ".8rem" })}
  ${ScreenWith1470px({ fontSize: "1rem" })}
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  transition: 1s ease-in-out;

  @media (max-width: 500px) {
    top: none;
    bottom: 0 !important;
    width: 100vw;
    height: 55vh;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background: white;

    &.expandedXL {
      height: 55vh;
    }
  }

  @media (min-width: 500px) {
    top: 0;
    right: 0;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes moveDesktop {
    0% {
      transform: translate(150px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes moveMobile {
    0% {
      transform: translate(-150px, 0);
    }
    100% {
      scale: 0.8;
      transform: translate(0, 0);
    }
  }

  @media (min-width: 501px) {
    animation: moveDesktop 0.5s ease-in-out;
  }

  @media (max-width: 500px) {
    transform: scale(0.85);
    transition: transform 0.5s ease-in-out;
    animation: moveMobile 0.5s ease-in-out;
  }
`;

export const InputWrapper = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: #f5f5f5;
  border: none;
  font-size: 1.1em;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const ButtonWrapper = styled.button`
  width: calc(100% + 20px);
  height: 40px;
  background-color: #2668c6;
  font-size: 1.3em;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin-top: 15px;
`;

export const QuickGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 500px) {
    margin-top: -20px;
    transform: scale(0.8);
  }
`;

export const GroupIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin: 0 10px;
  :hover {
    background-color: #2668c6;
    color: white;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 25px 30px;
  border-radius: 2em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  height: 270px;

  &.expanded {
    height: 310px;
    gap: 10px;
    @media (max-width: 500px) {
      height: 300px !important;
      padding-bottom: 30px;
    }
  }

  &.expandedXL {
    height: 390px;

    @media (max-width: 500px) {
      height: 300px !important;
      padding-bottom: 30px;
    }
  }

  @media (max-width: 500px) {
    height: 190px;
    width: 70%;
  }

  transition: height 0.5s ease-in-out;
`;

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const ModalChild = styled.div`
  width: 20%;
  height: 15%;
  color: red;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 500px) {
    width: 80%;
    height: 15%;
  }
`;
export const CloseButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #2668c6;
  font-size: 1.3em;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;
