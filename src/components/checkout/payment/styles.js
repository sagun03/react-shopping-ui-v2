import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 2rem;
  width: 100%;
  max-width: 700px;
  height: 380px;
  margin: 0px 10px 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: 600;
  color: #212529;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 14px;
  max-width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #ced4da;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
  padding: 14px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 18px;
  width: 100%;
  margin-top: 1rem; /* Adjust spacing */
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  margin-top: 1rem;
  font-size: 14px;
`;

export { Form, FormGroup, Label, InputWrapper, Input, Button, ErrorMessage };
