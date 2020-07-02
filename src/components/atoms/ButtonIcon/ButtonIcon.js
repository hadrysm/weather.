import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  height: 4.8rem;
  width: 4.8rem;
  margin: 0 0.5rem;
  border-radius: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.secondary};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export default ButtonIcon;
