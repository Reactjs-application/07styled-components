import styled from "styled-components";

export const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "outline" ? "#bf4f74" : " #000"};
  color: #ffffff;
`;

export const TomotoButton = styled(Button)`
  color: #fff;
  border-color: tomato;
  background-color: tomato;
`;

export const DarkButton = styled(Button)`
  border: 1px solid ${(props) => props.theme.light.primary};
  color: ${(props) => props.theme.light.text};
  background-color: ${(props) => props.theme.light.primary};
`;
