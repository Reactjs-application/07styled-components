import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: "text",
  $size: props.$size || "1rem",
}))`
  margin: ${(props) => props.$size};
  padding: ${(props) => props.$size};
  padding: ${(props) => props.$size};
  text-indent: 10px;
`;

export const PasswordInput = styled.input.attrs(() => ({
  type: "password",
}))`
  border: 2px solid red;
`;
