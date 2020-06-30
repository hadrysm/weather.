import styled from 'styled-components';

const Heading = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.font.size.xxl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export default Heading;
