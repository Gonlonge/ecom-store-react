import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;

  label {
    font-size: 1rem;
  }

  input,
  textarea {
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }

  button {
    font-size: 1rem;
    padding: 0.5rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0062cc;
    }
  }
`;

export default StyledForm;
