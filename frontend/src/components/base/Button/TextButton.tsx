import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

type ButtonProps = ComponentPropsWithoutRef<"a">;

const StyledLink = styled.a<ButtonProps>`
  color: inherit;

  &:hover {
    color: inherit;
    cursor: pointer;
  }
`;

const TextButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
      <StyledLink {...props}>{props.children}</StyledLink>
  );
};

export default TextButton;
