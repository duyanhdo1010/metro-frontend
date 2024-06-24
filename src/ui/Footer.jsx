import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 1.6rem 3.2rem;
  background-color: var(--color-teal-9);
  color: var(--color-teal-0);
  text-align: center;
`;

function Footer() {
  const currentYear = new Date().getFullYear();
  return <StyledFooter>Copyright &copy; {currentYear} by Do Duy Anh</StyledFooter>;
}

export default Footer;
