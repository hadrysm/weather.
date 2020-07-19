import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UserPageTemplate from 'templates/UserPageTemplate';

const StyledWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

const ContentTemplate = ({ children }) => (
  <UserPageTemplate>
    <StyledWrapper>{children}</StyledWrapper>
  </UserPageTemplate>
);

ContentTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default ContentTemplate;
