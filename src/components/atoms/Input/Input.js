import styled from 'styled-components';

const Input = styled.input`
  padding: 1.5rem 4rem 1.5rem 3rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 1rem;
  outline: none;
  font-size: ${({ theme }) => theme.font.size.m};

  ::placeholder {
    color: ${({ theme }) => theme.white};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.s};
  }

  ::selection {
    background-color: ${({ theme }) => theme.primary};
  }

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xxl};

    ::placeholder {
      font-size: ${({ theme }) => theme.font.size.xl};
    }
  }
`;

export default Input;
