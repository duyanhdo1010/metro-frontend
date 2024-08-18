import { FaCalendar, FaFlag, FaHome, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  grid-row: 2 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-teal-9);
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: var(--color-teal-5);
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    gap: 1.2rem;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover {
    background-color: var(--color-teal-1);
    border-radius: 1.2rem;
    color: var(--color-teal-8);
    transition: all 0.3s;
  }
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-teal-9);
    background-color: var(--color-teal-3);
    border-radius: 1.2rem;
  }
`;

function AdminSidebar() {
  return (
    <StyledSidebar>
      <StyledNavLink to="/admin/dashboard">
        <FaHome />
        Home
      </StyledNavLink>
      <StyledNavLink to="/admin/tours">
        <FaFlag />
        Tours
      </StyledNavLink>
      <StyledNavLink to="/admin/users">
        <FaUser />
        Users
      </StyledNavLink>
      <StyledNavLink to="/admin/bookings">
        <FaCalendar />
        Bookings
      </StyledNavLink>
    </StyledSidebar>
  );
}

export default AdminSidebar;
