import React from 'react';
import styled from 'styled-components';
import { SearchField } from '@aws-amplify/ui-react';

const SearchBoxComponent2 = () => {

  const handleChange = (event) => {
    console.log(`${event.target.value}`);
  }

  const handleClear = () => {
    console.log(`keyword clear`);
  }

  return (
    <>
      <StyledSearchFieldInput 
          hasSearchIcon={true}
          hasSearchButton={false}
          placeholder='Title,people,genres'
          inputStyles={{color: 'var(--amplify-colors-white)'}}
          onChange={handleChange}
          onClear={handleClear}
      />
    </>
  );
}

export default SearchBoxComponent2;

const StyledSearchFieldInput = styled(SearchField)`
  position: absolute;
  font-size: 1.5rem;
  animation: extension 0.5s linear forwards;

  @media screen and (max-width: 500px) {
    animation: extension-small 0.5s linear forwards;
  } 

  @keyframes extension {
    0% {
      top: -0.5rem;
      left: 0;
      width: 0;
    }

    100% {
      top: -0.5rem;
      left: -300px;
      width: 300px;
    }
  }

  @keyframes extension-small {
    0% {
      top: -1.0rem;
      left: 0;
      width: 0;
    }

    100% {
      top: -1.0rem;
      left: -230px;
      width: 230px;
    }
  }
`;
