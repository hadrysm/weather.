import styled from 'styled-components';

const Heading = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  @media ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xxl};
  }
`;

export default Heading;
