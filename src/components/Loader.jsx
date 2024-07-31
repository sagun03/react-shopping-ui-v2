import loaderGif from "../pages/images/loader.gif";
import React from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoaderImage = styled.img`
  src: url(${loaderGif});
  alt: "Loading...";
`;

const Loader = () => (
  <LoaderWrapper>
    <LoaderImage src={loaderGif} alt="Loading..." />
  </LoaderWrapper>
);

export default Loader;
