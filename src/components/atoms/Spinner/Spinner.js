import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const Svg = styled.svg`
  animation: rotate 2s linear infinite;
  margin: 0;
  width: 30px;
  height: 30px;

  & .path {
    stroke: #ffffff;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Spinner = ({ className }) => (
  <StyledWrapper>
    <Svg viewBox="0 0 50 50" className={className}>
      <circle className="path" cx="25" cy="25" r="20" fill="#8650FA" strokeWidth="4" />
    </Svg>
  </StyledWrapper>
);

Spinner.propTypes = {
  className: PropTypes.string,
};

Spinner.defaultProps = {
  className: '',
};

export default Spinner;
