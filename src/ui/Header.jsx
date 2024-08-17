/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from './Logo';
import { useSelector } from 'react-redux';
import useLogout from '../features/authentication/useLogout';

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
  grid-column: 1 / -1;
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

const StyledButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  color: var(--color-teal-0);
  background-color: var(--color-teal-6);
  padding: 0.8rem 1.2rem;
  border-radius: 1000px;
  border: none;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: var(--color-teal-9);
  }
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

const StyledAvatar = styled.img`
  max-height: 5.2rem;
  width: auto;
  border-radius: 50%; /* Làm cho hình ảnh trở nên tròn */
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  color: var(--color-teal-9);
  font-weight: 500;
  position: relative;
  display: inline-block;
  &:hover .dropdown {
    display: flex;
    flex-direction: column;
    left: 50%;
    transform: translateX(-50%); /* Thêm dòng này */
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  padding: 1.2rem 1.6rem;
  display: none;
  position: absolute;
  z-index: 1;
  background-color: #fff;
  min-width: 20rem;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
`;

function Header() {
  const { user } = useSelector((state) => state.auth);
  const { logout, isLoading } = useLogout();

  function handleLogout() {
    logout();
  }

  return (
    <StyledHeader>
      <nav>
        <NavList>
          <li>
            {user?.role === 'admin' ? (
              ''
            ) : (
              <StyledNavLink to="/tours">
                <span>Các Tour</span>
              </StyledNavLink>
            )}
          </li>
          <li>
            <StyledNavLink to="/">
              <Logo />
            </StyledNavLink>
          </li>
          <StyledListItem>
            {user ? (
              <>
                <DropdownContainer>
                  <StyledAvatar
                    src={
                      user?.photo
                        ? `http://localhost:3000/img/users/${user?.photo}`
                        : `/default-avatar.png`
                    }
                    alt="User Avatar"
                  />
                  <Dropdown className="dropdown">
                    <NavLink to={user?.role === 'admin' ? '/admin/me' : '/me'}>
                      Quản lý thông tin
                    </NavLink>
                    <NavLink to="/me/bookings">Bookings của tôi</NavLink>
                  </Dropdown>
                </DropdownContainer>
                <StyledButton onClick={handleLogout}>Logout</StyledButton>
              </>
            ) : (
              <>
                <StyledNavLink to="/login">
                  <span>Đăng nhập</span>
                </StyledNavLink>
                <StyledNavLink to="/register" type="button">
                  <span type="button">Đăng ký</span>
                </StyledNavLink>
              </>
            )}
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
