import styled from 'styled-components';

const Input = styled.input`
  padding: 1.5rem 3rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 1rem;
  outline: none;
  font-size: ${({ theme }) => theme.font.size.m};

  ::placeholder {
    color: ${({ theme }) => theme.white};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.m};
  }

  ::selection {
    background-color: ${({ theme }) => theme.primary};
  }
`;

export default Input;
