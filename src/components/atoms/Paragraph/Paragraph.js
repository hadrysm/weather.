import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  @media ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`;

export default Paragraph;
