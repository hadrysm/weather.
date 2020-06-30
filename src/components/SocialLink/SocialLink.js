import styled from 'styled-components';

const SocialLink = styled.a`
  display: block;
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.primary};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
`;

export default SocialLink;
