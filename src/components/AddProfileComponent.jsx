import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, View, Text, Image, Button, Divider, TextField, ThemeProvider, CheckboxField } from '@aws-amplify/ui-react';
import useToggle from '../hooks/use-toggle';

const AddProfileComponent = ({ handleClickAddProfile, handleClickSwitchScreen }) => {

  const { state: isKid, toggle: toggleKid } = useToggle(false);
  const [ profileName, setProfileName ] = useState('');
  const [ isDisabled, setIsDisabled ] = useState(true);

  const theme = {
    name: 'Add Profile Theme',
    tokens: {
      components: {
        textfield: {
          color: { value: 'var(--amplify-colors-white)' },
        },
      }
    }
  }

  const handleClick = () => {
    toggleKid();
  }

  const handleInputChange = (e) => {
    const name = e.target.value;

    if(name === "") {
      setIsDisabled(true)
    }
    else {
      setIsDisabled(false)
      setProfileName(e.target.value);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledFlexAddProfile direction="column" alignItems="flex-start">
        <StyledTextHeading0>Add Profile</StyledTextHeading0>
        <StyledTextHeading5>Add a profile for another person watching Tealium Prime Video</StyledTextHeading5>
        <Divider size='small' orientation='horizontal' />

        <StyledFlexItemContainer direction='row' justifyContent='flex-start' alignItems='center'>
          <StyledViewProfile>
            {
              isKid === true ? <Image alt='profile' src='https://www.kiyotaro.cloud/images/tealium_beast.png' width='100%' /> 
                    : <Image alt='profile' src='https://www.kiyotaro.cloud/images/tealium-logo-small.jpeg' width='100%' /> 
            }
          </StyledViewProfile>
          <View>
            <StyledTextFieldName placeholder='Name' labelHidden onChange={handleInputChange}/>
          </View>
          <View>
            <Flex direction='row' alignItems='center'>
              <StyledCheckboxFieldIsKid label='Kid ?' labelHidden value='yes' size='large' onClick={handleClick}/>
              <StyledTextIsKidLabel>Kids ?</StyledTextIsKidLabel>
            </Flex>
          </View>
        </StyledFlexItemContainer>

        <Divider size='small' orientation='horizontal' />
        <Flex direction='row' alignItems='center'>
          <StyledButtonContinue size={{ base: 'small', medium: 'medium', large: 'large'}} onClick={(event) => handleClickAddProfile(event, profileName, isKid)} isDisabled={isDisabled}> Continue </StyledButtonContinue>
          <StyledButtonCancel size={{ base: 'small', medium: 'medium', large: 'large'}} variation="primary" onClick={handleClickSwitchScreen}> Cancel </StyledButtonCancel>
        </Flex>
      </StyledFlexAddProfile>
    </ThemeProvider>
  );
}

export default AddProfileComponent;

const StyledViewProfile = styled(View)`
  width: 200px;
  margin: 0 30px;

  img {
    &:hover {
      cursor: pointer;
      border: solid 2px var(--amplify-colors-brand-primary-100);
    }
  }

  @media screen and (max-width: 1280px) {
    width: 150px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    margin: 0 3px
  }
`;

const StyledTextHeading0 = styled(Text)`
  font-size: 64px;
  font-family: 'Ubuntu';
  font-weight: 700;
  color: var(--amplify-colors-white);
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 48px;
  }

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

const StyledFlexAddProfile = styled(Flex)`
  padding-inline: 350px 350px;

  @media screen and (max-width: 1280px) {
    padding-inline: 250px 250px;
  }

  @media screen and (max-width: 1024px) {
    padding-inline: 150px 150px;
  }

  @media screen and (max-width: 768px) {
    padding-inline: 50px 50px;
  }

  @media screen and (max-width: 480px) {
    padding-inline: 20px 20px;
  }
`;

const StyledTextHeading5 = styled(Text)`
  font-size: 24px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-neutral-80);
  text-align: left;

  @media screen and (max-width: 1400px) {
    font-size: 20px;
  }

  @media screen and (max-width: 1280px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledFlexItemContainer = styled(Flex)`
  margin-block: 20px 20px;
`;

const StyledTextFieldName = styled(TextField)`
  width: 25rem;

  @media screen and (max-width: 1536px) {
    width: 20rem;
  }

  @media screen and (max-width: 1396px) {
    width: 15rem;
  }

  @media screen and (max-width: 1332px) {
    width: 12rem;
  }

  @media screen and (max-width: 1280px) {
    width: 25rem;
  }

  @media screen and (max-width: 992px) {
    width: 20rem;
  }

  @media screen and (max-width: 828px) {
    width: 14rem;
  }

  @media screen and (max-width: 790px) {
    width: 12rem;
  }

  @media screen and (max-width: 480px) {
    width: 10rem;
  }
`;

const StyledCheckboxFieldIsKid = styled(CheckboxField)`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StyledTextIsKidLabel = styled(Text)`
  font-size: 24px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);

  @media screen and (max-width: 1536px) {
    font-size: 18px
  }

  @media screen and (max-width: 768px) {
    font-size: 14px
  }

  @media screen and (max-width: 460px) {
    font-size: 9px
  }

`;

const StyledButtonContinue = styled(Button)`
  background-color: var(--amplify-colors-yellow-80) ;
  color: var(--amplify-colors-white) ;
  width: 10rem;
  border: solid 1px var(--amplify-colors-yellow-80);
`;

const StyledButtonCancel = styled(Button)`
  width: 8rem;
`;