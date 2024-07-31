import styled from "styled-components";

const Container = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3rem;
  margin-bottom: 2rem;
`;

const HeadingContainer = styled.div`
  text-align: center;
`;

const EffectCardHeading = styled.div`
  padding: 5px 10px;
  color: #333;
  font-family: Roboto;
  font-size: 48px;
  font-weight: 400;
  margin: 0rem 0rem 4rem;
`;

export { Container, HeadingContainer, EffectCardHeading };
