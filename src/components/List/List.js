import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem/ListItem';

const ListWrapper = styled.ul`
  width: 90%;
  padding: 1rem 0;
  margin: 0 auto;
  list-style: none;
`;

const List = () => (
  <ListWrapper>
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
  </ListWrapper>
);

export default List;
