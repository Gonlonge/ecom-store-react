import styled from "styled-components";

const NavSearchStyle = styled.input`
  border: none;
  padding: 8px;
  border-radius: 5px;
  margin: 0px 0px 20px 0px;
  border: solid 1px ${({ theme }) => theme.colors.tertiary};

  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px ${({ theme }) => theme.colors.tertiary};
    border: solid 1px ${({ theme }) => theme.colors.tertiary};
  }
`;

function SearchBar({ searchQuery, onSearchInputChange }) {
  return (
    <NavSearchStyle
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={onSearchInputChange}
    />
  );
}

export default SearchBar;
