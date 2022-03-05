import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  icon: JSX.Element;
  selected?: boolean;
  selectedIcon?: JSX.Element;
}

const ButtonWrapper = styled.button<ButtonProps>`
  outline: none;
  background: none;
  border: none;
  color: inherit;
  padding: 0;

  &:hover {
    cursor: pointer;
  }

  span {
    display: ${({ selected }) => (selected ? "inline-block" : "none")} none;
  }

  span:hover {
    display: block;
  }
`;

const IconWrapper = styled.span`
  position: absolute;
`;

const IconButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <ButtonWrapper {...props}>
      <IconWrapper>{props.selectedIcon}</IconWrapper>
      {props.selected ? props.selectedIcon : props.icon}
    </ButtonWrapper>
  );
};

export default IconButton;
