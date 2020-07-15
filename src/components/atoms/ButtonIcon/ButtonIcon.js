import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  height: 4.8rem;
  width: 4.8rem;
  margin: 0;
  margin-left: 0.5rem;
  border-radius: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.secondary};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center;
  cursor: pointer;
  transition: background-color 0.1s ease;

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

export default ButtonIcon;
