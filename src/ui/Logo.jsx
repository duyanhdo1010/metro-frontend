import styled from 'styled-components';

const StyledLogo = styled.img`
  max-height: 5.2rem;
  width: auto;
`;

function Logo() {
  return <StyledLogo src="/logo.png" alt="Logo" />;
}

export default Logo;
