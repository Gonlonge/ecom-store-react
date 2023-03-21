import React, { useState } from "react";
import styled from "styled-components";
import { MainContainer } from "../components/styled-components/Body.styles";
import MainButton from "../components/styled-components/MainButton.styles";

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-size: 1rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 4px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px ${({ theme }) => theme.colors.tertiary};
    border: solid 1px ${({ theme }) => theme.colors.tertiary};
  }
`;

const TextArea = styled.textarea`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 4px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px ${({ theme }) => theme.colors.tertiary};
    border: solid 1px ${({ theme }) => theme.colors.tertiary};
  }
`;

function Contact() {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Log the form data if validation requirements are met
    if (fullName && subject && email && body) {
      console.log("Full Name:", fullName);
      console.log("Subject:", subject);
      console.log("Email:", email);
      console.log("Body:", body);
    }
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="full-name">Full Name:</Label>
        <Input
          id="full-name"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          minLength={3}
          required
        />

        <Label htmlFor="subject">Subject:</Label>
        <Input
          id="subject"
          type="text"
          value={subject}
          onChange={handleSubjectChange}
          minLength={3}
          required
        />

        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <Label htmlFor="body">Body:</Label>
        <TextArea
          id="body"
          value={body}
          onChange={handleBodyChange}
          minLength={3}
          required
        />

        <MainButton type="submit">Submit</MainButton>
      </Form>
    </MainContainer>
  );
}
export default Contact;
