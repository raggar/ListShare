import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { ReactIcon } from "../ReactIcon";

type Props = ComponentPropsWithoutRef<"div">;

interface CircleProps extends Props {
  open?: boolean;
  size?: number;
  background?: string;
  icon: any;
}

const StyledCircle = styled.div<CircleProps>`
  height: ${({ size }) => (size ? size : 36)}px;
  width: ${({ size }) => (size ? size : 36)}px;
  border: 0.5px solid;
  border-radius: 50%;
  background-color: ${({ background }) => background};
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function DropCircle(props: CircleProps) {
  return (
    <StyledCircle {...props}>
      <IconWrapper>{ReactIcon(props.icon, 22)}</IconWrapper>
    </StyledCircle>
  );
}

export default DropCircle;
