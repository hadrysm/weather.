import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import actions from 'store/weather/actions';

import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Spinner from 'components/atoms/Spinner/Spinner';

import searchIcon from 'assets/icons/search.svg';

const StyledWrapper = styled.form`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0px 5px 10px 0px ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.secondary};
`;

const Form = ({ getWeather, loading }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = ({ target: { value } }) => setSearchValue(value);

  const handleSubmit = e => {
    e.preventDefault();
    getWeather(searchValue);
    setSearchValue('');
  };

  return (
    <StyledWrapper onSubmit={handleSubmit}>
      <Input onChange={handleChange} value={searchValue} placeholder="Enter a city..." />
      {loading ? <Spinner /> : <ButtonIcon type="submit" icon={searchIcon} />}
    </StyledWrapper>
  );
};

Form.propTypes = {
  getWeather: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

Form.defaultProps = {
  loading: false,
};

const mapStateToProps = ({ loading }) => ({ loading });

const mapDispatchToProps = dispatch => ({
  getWeather: city => dispatch(actions.getWeather(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
