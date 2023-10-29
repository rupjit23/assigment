import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 6% 2%;
    height:100%
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  @media(max-width:500px)
  {
    width:100%;
    height:100%;
  }
`;

const FormHeader = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content:left;
  
  margin: 0.9% 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  
  
  margin: auto;
  width: 50%;
  padding: 10px;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 1%;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const PasswordToggle = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-left: 5px;
`;

const SubmitButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 35%;
  height: 2.5rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  align-items: center;
  margin: auto;
 
  padding: 1px;
  @media(max-width:500px)
  {
    display:inline;
  }
`;

const Header = styled.p`
  align-items: left;
  font-weight: bold;
  margin: auto;
  width: 47%;
  padding: 1px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width:500px)
  {
    display:block;
  }
`;

const ForgetPasswordText = styled.span`
  color: #ff8c00;
  cursor: pointer;
  margin-left: auto;
  @media(max-width:500px)
  {
    display:block;
  }
`;

const TermsAndConditionsContainer = styled.div`
  display: flex;
  margin: 2% 0;
  margin: auto;
  width: 47%;
  padding: 1px;
  @media(max-width:500px)
  {
    display:block;
  }
`;

const AgreeCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
  @media(max-width:500px)
  {
    display:inline;
  }
`;

const TermsText = styled.span`
  color: #ff8c00;
`;

const TermsText1 = styled.span`
  color: #ff8c00;
  font-weight: bold;
`;

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [formData, setFormData] = useState({
    password: ' ',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleAgreeToTermsChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <FormHeader>Login</FormHeader>
      <br></br>
      <br></br>
      <Form>
        <Header>Login ID</Header>
        <InputContainer>
          <Input type="text" placeholder="Enter Login ID" />
        </InputContainer>
        <br></br>
        <Header>Password</Header>
        <InputContainer>
          <Input
            placeholder="Enter Password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleOnChange}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <PasswordToggle onClick={togglePasswordVisibility}>
            {showPassword ? <AiOutlineEyeInvisible fontSize={24} /> : <AiOutlineEye fontSize={24}  />}
          </PasswordToggle>
        </InputContainer>
            <br></br>
        <TermsAndConditionsContainer>
          <AgreeCheckbox
            id="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label htmlFor="rememberMe">Remember Me</label>
          <ForgetPasswordText>Change Password</ForgetPasswordText>
        </TermsAndConditionsContainer>
        <br></br>
        <TermsAndConditionsContainer>
          <AgreeCheckbox
            id="agreeToTerms"
            checked={agreeToTerms}
            onChange={handleAgreeToTermsChange}
          />{' '}
          Agree to&nbsp;
          <TermsText>
            <u>Terms & Conditions</u>
          </TermsText>
        </TermsAndConditionsContainer>
      </Form>
    <br></br>
      <SubmitButton type="submit">Log In</SubmitButton>
      <br></br>
      <Footer>
        Don't have an account?<TermsText1>&nbsp;<u>Register Here</u></TermsText1>

      </Footer>
    </Container>
  );
};

export default Login;
