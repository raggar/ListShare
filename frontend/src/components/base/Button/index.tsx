import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { Typography } from "..";
import styles from "../../../styles/styles";

type Props = ComponentPropsWithoutRef<"button">;

interface ButtonProps extends Props {
  primary?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ primary }) =>
    primary ? styles.colors.dark : "transparent"};
  color: ${({ primary }) =>
    primary ? styles.colors.white : styles.colors.dark};
  border: 1px solid ${styles.colors.dark};
  outline: none;
  padding: 12px;
  min-width: 150px;
  width: auto;

  &:hover {
    background-color: ${({ primary }) =>
      primary ? styles.colors.black : "transparent"};
    color: ${({ primary }) =>
      primary ? styles.colors.white : styles.colors.black};
    border: 1px solid ${styles.colors.black};
  }
`;

function Button(props: ButtonProps) {
  return (
    <StyledButton {...props}>
      <Typography variant="body">{props.children}</Typography>
    </StyledButton>
  );
}

export default Button;
