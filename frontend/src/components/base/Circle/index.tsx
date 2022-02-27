import { motion } from "framer-motion";
import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

type Props = ComponentPropsWithoutRef<"div">;

interface CircleProps extends Props {
  open?: boolean;
  size?: number;
  background?: string;
  icon?: JSX.Element;
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

function Circle(props: CircleProps) {
  return (
    <StyledCircle {...props}>
      <IconWrapper>
        <motion.div
          animate={{ rotate: props.open ? 180 : 0 }}
        >
          {props.icon}
        </motion.div>
      </IconWrapper>
    </StyledCircle>
  );
}

export default Circle;
