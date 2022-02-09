import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import styles from "../../../styles/styles";

type Props = ComponentPropsWithoutRef<"button">;

interface ButtonProps extends Props {
  primary?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ primary }) =>
    primary ? styles.colors.black : "transparent"};
  color: ${({ primary }) =>
    primary ? styles.colors.white : styles.colors.black};
  border: 1px solid ${styles.colors.black};
  outline: none;
  padding: 12px;
  min-width: 150px;
`;

function Button(props: ButtonProps) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
