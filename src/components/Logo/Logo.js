import styled from 'styled-components';

import logoIcon from 'assets/icons/logo.svg';

const Logo = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  margin: 0 1rem;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: center;
`;

export default Logo;
