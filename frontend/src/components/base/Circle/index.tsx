import React, { ComponentPropsWithoutRef } from "react";
import { ChevronDown, ChevronUp, Icon } from "react-feather";
import styled from "styled-components";
import styles from "../../../styles/styles";
import { FeatherIcon } from "../Icon";

type Props = ComponentPropsWithoutRef<"button">;

interface CircleProps extends Props {
  open?: boolean;
  size?: number;
  background?: string;
  icon: Icon;
}

const StyledCircle = styled.button<CircleProps>`
  height: ${({ size }) => (size ? size : 36)}px;
  width: ${({ size }) => (size ? size : 36)}px;
  border: 1px solid ${styles.colors.black};
  border-radius: ${({ size }) => (size ? size : 36)}px;
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
      <IconWrapper>{FeatherIcon(props.icon, 24)}</IconWrapper>
    </StyledCircle>
  );
}

export default DropCircle;
