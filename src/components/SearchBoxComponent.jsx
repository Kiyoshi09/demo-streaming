import React from 'react';
import styled from 'styled-components';
import { TextField } from '@aws-amplify/ui-react';
import { useSpring, animated } from '@react-spring/web'

const SearchBoxComponent = () => {
  const AnimatedInput = animated(StyledTextFieldInput);

  const styles = useSpring({
    from: { x: "-25px", width: "0" },
    to: { x: "-300px", width: "300px" }
  });

  return (
    <AnimatedInput style={styles} inputStyles={{backgroundColor: 'var(--amplify-colors-white)'}}/>
  );
}

export default SearchBoxComponent;

const StyledTextFieldInput = styled(TextField)`
  position: absolute;
  top: -1.0rem;
  font-size: 1.5rem;
`;