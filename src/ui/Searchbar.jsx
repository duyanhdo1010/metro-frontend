/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import styled from 'styled-components';

const StyledSearchbar = styled.div`
  display: flex;
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-teal-9);
  border-radius: 100px;
  width: 50%;
  align-items: center;
  font-size: 1.6rem;
  gap: 0.8rem;

  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--color-teal-7);
  }
`;

const StyledInput = styled.input`
  flex-grow: 1;
  border: none;
  &:focus {
    outline: none;
  }
  &:active {
    border: none;
  }
`;

function Searchbar() {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <StyledSearchbar>
      <IoIosSearch />
      <StyledInput
        placeholder="Tìm kiếm tour theo tên"
        onChange={handleInputChange}
        value={value}
      />
    </StyledSearchbar>
  );
}

export default Searchbar;
