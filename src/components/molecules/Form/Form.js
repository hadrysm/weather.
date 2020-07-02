import React from 'react';
import styled from 'styled-components';

import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

import searchIcon from 'assets/icons/search.svg';

const StyledWrapper = styled.form`
  display: flex;
  position: relative;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  top: 0;
  right: -2.5rem;
`;

const Form = () => {
  return (
    <StyledWrapper>
      <Input placeholder="Enter a city..." />
      <StyledButtonIcon type="submit" icon={searchIcon} />
    </StyledWrapper>
  );
};

export default Form;
