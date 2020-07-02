import React from 'react';
import styled from 'styled-components';

import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 0;
  text-transform: uppercase;
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.xl};
`;

const ListItem = () => (
  <ItemWrapper>
    <StyledHeading>tue</StyledHeading>
    <Paragraph>lorem iptm dot set</Paragraph>
    <StyledHeading>23°C</StyledHeading>
  </ItemWrapper>
);

export default ListItem;
