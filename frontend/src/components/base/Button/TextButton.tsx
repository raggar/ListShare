import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  hoverColor?: string;
}

const StyledLink = styled.a<ButtonProps>`
  color: inherit;

  &:hover {
    color: ${({ hoverColor }) => hoverColor ?? "inherit"};
    cursor: pointer;
  }
`;

const TextButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

export default TextButton;
