import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  height: 4.8rem;
  width: 4.8rem;
  padding: 1.5rem 3rem;
  border-radius: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.secondary};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: center;

  :focus {
    outline: none;
  }
`;

export default ButtonIcon;
