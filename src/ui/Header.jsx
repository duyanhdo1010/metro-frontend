import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from './Logo';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.6rem 3.2rem;
  z-index: 1000; // Đảm bảo header luôn ở trên cùng
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Tạo hiệu ứng đổ bóng nhẹ cho header
  border: 1px solid var(--color-teal-9);
  background-color: var(--color-teal-0);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledListItem = styled.li`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-weight: bold;
  ${(props) =>
    props.type === 'text' &&
    css`
      &:link,
      &:visited {
        color: var(--color-teal-6);
      }

      &:hover,
      &:active {
        color: var(--color-teal-9);
      }
    `}
  ${(props) =>
    props.type === 'button' &&
    css`
      &:link,
      &:visited {
        color: var(--color-teal-0);
        background-color: var(--color-teal-6);
        padding: 0.8rem 1.2rem;
        border-radius: 1000px;
        cursor: pointer;
      }
      &:hover,
      &:active {
        background-color: var(--color-teal-9);
      }
    `}
`;

function Header() {
  return (
    <StyledHeader>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/tours">
              <span>All Tours</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">
              <Logo />
            </StyledNavLink>
          </li>
          <StyledListItem>
            <StyledNavLink to="/login">
              <span>Login</span>
            </StyledNavLink>
            <StyledNavLink to="/register" type="button">
              <span type="button">Sign Up</span>
            </StyledNavLink>
          </StyledListItem>
        </NavList>
      </nav>
    </StyledHeader>
  );
}

StyledNavLink.defaultProps = {
  type: 'text'
};

export default Header;
