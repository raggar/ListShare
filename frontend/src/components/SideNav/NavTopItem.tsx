import React, { ComponentPropsWithoutRef } from "react";
import { Stack } from "react-bootstrap";
import { Icon } from "react-feather";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "../../styles/styles";
import { ReactIcon, Spacer } from "../";

export interface NavTopItemProps extends ComponentPropsWithoutRef<"button"> {
  icon: Icon;
  name: string;
  link: string;
  selected?: boolean;
}

const StyledStack = styled(Stack).attrs({ direction: "horizontal" })`
  color: ${styles.colors.text.dark};

  :hover {
    color: ${styles.colors.black} !important;
  }
`;

const NavTopItem = (props: NavTopItemProps) => {
  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <StyledStack className="align-items-center">
        {ReactIcon(props.icon, 22)}
        <Spacer width={32} />
        {props.name}
      </StyledStack>
    </Link>
  );
};

export default NavTopItem;
