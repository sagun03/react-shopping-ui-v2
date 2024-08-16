/* eslint-disable react/prop-types */
import React from "react";
import {
  ErrorPageContainer,
  ErrorContent,
  ErrorTitle,
  ErrorMessage,
  ErrorDetails,
  ErrorActions,
  ActionLink,
  ContactLink
} from "./styles/ErrorComponent";

const ErrorPage = ({ error }) => (
  <ErrorPageContainer>
    <ErrorContent>
      <ErrorTitle>Uh-oh! Something went wrong.</ErrorTitle>
      <ErrorMessage>We&apos;re sorry for the inconvenience. Please try again later or contact our support team.</ErrorMessage>
      {error && <ErrorDetails>{error.toString()}</ErrorDetails>}
      <ErrorActions>
        <ActionLink href="/">Back to Home</ActionLink>
        <ContactLink href="mailto:support@example.com">Contact Support</ContactLink>
      </ErrorActions>
    </ErrorContent>
  </ErrorPageContainer>
);

export default ErrorPage;
