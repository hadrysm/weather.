import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import actions from 'store/weather/actions';

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

const Form = ({ getWeather }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => setSearchValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    getWeather(searchValue);
  };

  return (
    <StyledWrapper onSubmit={handleSubmit}>
      <Input onChange={handleChange} value={searchValue} placeholder="Enter a city..." />
      <StyledButtonIcon type="submit" icon={searchIcon} />
    </StyledWrapper>
  );
};

Form.propTypes = {
  getWeather: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getWeather: city => dispatch(actions.getWeather(city)),
});

export default connect(null, mapDispatchToProps)(Form);
