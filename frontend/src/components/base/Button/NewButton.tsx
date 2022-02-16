import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import styles from "../../../styles/styles";
import { ReactIcon } from "../ReactIcon";
import Circle from "../Circle";

const StyledCircle = styled(Circle).attrs({ size: 48 })`
  z-index: 999;

  :hover {
    cursor: pointer;
    background: ${styles.colors.text.accent};
  }
`;

const NewButton: React.FC = () => {
  return (
    <StyledCircle
      icon={ReactIcon(MdAdd, 24, styles.colors.text.light)}
      background={styles.colors.dark}
    />
  );
};

export default NewButton;
