import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Flex, TextField, View } from '@aws-amplify/ui-react';
import useNavigation from '../hooks/use-navigation';
import EmailValidator from 'email-validator';

const GetStartedComp = () => {

  const [ email, setEmail ] = useState('');
  const [ isEmailValid, setIsEmailValid ] = useState(true);

  const { navigate } = useNavigation();

  const handleEmailInput = (e) => {
    setIsEmailValid(true);
    setEmail(e.target.value)
  }

  const handleClickSignUp = (event, to) => {
    if(event.metaKey || event.ctrlKey) {
      return;
    }

    if (! EmailValidator.validate(email)) {
      setIsEmailValid(false);
      return;
    }

    event.preventDefault();
    navigate({ to, email });
  }

  const handleEmailInputFocus = () => {
    setIsEmailValid(true);
  }

  const EmailLabel = () => {
    
    if(isEmailValid === true) {
      if(email === "") {
        return <StyledTextLabel>Email address</StyledTextLabel>;
      }
      else {
        return <StyledTextLabelFocused>Email address</StyledTextLabelFocused>;
      }
    }
    else {
      return <StyledTextLabelInvalidEmail>Invalid email address</StyledTextLabelInvalidEmail>
    }
  }

  return (
    <View paddingBlock="2rem 2rem">
      <Flex
        direction={{base: "column", medium: "row"}}
        position="relative"
        justifyContent="center"
        alignItems="center"
        gap="0.3rem">
          
          <StyledInputEmailContainer>
            <StyledTextField 
              label="email" 
              labelHidden 
              type="email" 
              size='large' 
              onChange={handleEmailInput} 
              onFocus={handleEmailInputFocus}/>
            {
              //email ? <StyledTextLabel></StyledTextLabel> : <StyledTextLabel>Email address</StyledTextLabel>
              EmailLabel()
            }
          </StyledInputEmailContainer>
          <StyledButtonGetStart variation='primary' onClick={(e) => handleClickSignUp(e, `/auth`)}>Get Started</StyledButtonGetStart>

      </Flex>
    </View>
  );
}

export default GetStartedComp;

const StyledInputEmailContainer = styled(View)`
  position: relative;

  &:focus-within {
    label {
      top: -24px;
      left: 0;
      width: 40%;
      color: var(--amplify-colors-teal-40);
      font-weight: 700;
      font-size: 14px;
      font-family: Ubuntu;
      padding-left: 6px;
      text-transform: uppercase;
      z-index: 1;
    }

    input {
      &:invalid {
        border: 2.0px solid red;
      }
    }
  }
`;

const StyledTextField = styled(TextField)`
  width: 20rem;
  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledTextLabel = styled.label`
  position: absolute;
  left: 17px;
  top: 12px;
  color: var(--amplify-colors-white);
`;


const StyledTextLabelFocused = styled(StyledTextLabel)`
  top: -24px;
  left: 0;
  width: 40%;
  color: var(--amplify-colors-teal-40);
  font-weight: 700;
  font-size: 14px;
  font-family: Ubuntu;
  padding-left: 6px;
  text-transform: uppercase;
  z-index: 1;
`;

const StyledTextLabelInvalidEmail = styled(StyledTextLabelFocused)`
  width: 60%;
  color: var(--amplify-colors-red-90);
`;


const StyledButtonGetStart = styled(Button)`
  height: 53px;
  font-family: 'Ubuntu';
  font-size: 1.2rem;

  @media screen and (max-width: 767px) {
    width: 20rem;
  }
`;