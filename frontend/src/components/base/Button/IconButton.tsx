import React, { ComponentPropsWithoutRef, useState } from "react";
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

const IconButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const [isHover, setHover] = useState(false);

  return (
    <ButtonWrapper
      {...props}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.selectedIcon && (props.selected || isHover)
        ? props.selectedIcon
        : props.icon}
    </ButtonWrapper>
  );
};

export default IconButton;
