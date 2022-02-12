import React, { ComponentPropsWithoutRef, useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import styles from "../../styles/styles";
import { ReactIcon } from "../base/ReactIcon";
import Circle from "../base/Circle";

const StyledCircle = styled(Circle).attrs({ size: 48 })`
  z-index: 999;

  :hover {
    cursor: pointer;
    background: ${styles.colors.text.accent};
  }
`;

const NewListButton: React.FC = () => {
  return (
    <>
        <StyledCircle
          icon={ReactIcon(MdAdd, 24, styles.colors.text.light)}
          background={styles.colors.dark}
        />
    </>
  );
};

export default NewListButton;
