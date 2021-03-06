import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

import actions from 'store/weather/actions';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

import closeIcon from 'assets/icons/close.svg';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3rem 0;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: ${({ theme }) => theme.primary};
  text-align: center;
  box-shadow: 0px 10px 10px 0px ${({ theme }) => theme.secondary};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.xl};
  padding: 0 3rem;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

export const ErrorHandler = ({ setErrorToFalse }) => {
  const errorWrapper = useRef(null);

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      setErrorToFalse();
    }, 3000);

    return () => clearInterval(idTimeout);
  }, [setErrorToFalse]);

  useEffect(() => {
    const errHandler = errorWrapper.current;

    gsap.set(errHandler, { y: '-=100%', autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.to(errHandler, { y: '+=100%', autoAlpha: 1 });
  }, [errorWrapper]);

  const handleClick = () => setErrorToFalse();

  return (
    <StyledWrapper ref={errorWrapper}>
      <StyledParagraph>
        Sorry, the given city is not in the database.
        <span role="img" aria-label="confused">
          😕
        </span>
      </StyledParagraph>
      <StyledButtonIcon onClick={handleClick} icon={closeIcon} />
    </StyledWrapper>
  );
};

ErrorHandler.propTypes = {
  setErrorToFalse: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setErrorToFalse: () => dispatch(actions.setErrorToFalse()),
});

export default connect(null, mapDispatchToProps)(ErrorHandler);
