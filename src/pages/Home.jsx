
import React from 'react';
import Logo from '../assests/logo1.png';
import styled from 'styled-components';
import Login from '../components/Login';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
    overflow:hidden;
  align-items: center;
  padding-left:5%;
 
    gap:3%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  transform: translate(30%, 40%);
  width: 20%;
  height: 20%;
  align-self: center; /* Center the image vertically */
  text-align: center;
  padding-top:7%;
  
  @media (min-width: 768px) {
    transform: none;
    width: auto;
    
  }
  @media(max-width:766px)
  {
    visibility:hidden;
  }
`;

const LoginContainer1 = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px; 
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: -10%; 
  width: 70%; 
  margin-top: 20px; 
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Home = () => {
  return (
    <FlexContainer>
      <ImageContainer>
        <Image src={Logo} alt="Your Image" />
      </ImageContainer>
      <LoginContainer1>
        <Login />
      </LoginContainer1>
    </FlexContainer>
  );
};

export default Home;

