import React from 'react';
import styled from 'styled-components';
import { Button, Flex, TextField, View } from '@aws-amplify/ui-react';

const GetStartedComp = () => {
  return (
    <View paddingBlock="2rem 2rem">
      <Flex
        direction={{base: "column", medium: "row"}}
        position="relative"
        justifyContent="center"
        alignItems="center"
        gap="0.3rem">
          
          <StyledInputEmailContainer>
            <StyledTextField label="email" labelHidden type="email" size='large' />
            <StyledTextLabel>Email address</StyledTextLabel>
          </StyledInputEmailContainer>
          <StyledButtonGetStart variation='primary'>Get Started</StyledButtonGetStart>

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

const StyledButtonGetStart = styled(Button)`
  height: 53px;
  font-family: 'Ubuntu';
  font-size: 1.2rem;

  @media screen and (max-width: 767px) {
    width: 20rem;
  }
`;