import React, { ComponentPropsWithoutRef, useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import styles from "../../styles/styles";
import { ReactIcon } from "../base/ReactIcon";
import Circle from "../base/Circle";

const Wrapper = styled.div`
  border-left: 0.5px solid ${styles.colors.dark};
  margin-left: 18px;
  padding-bottom: ${styles.spacing[3]};
  position: relative;
`;

const StyledCircle = styled(Circle).attrs({size: 48})`
  left: -24px;
  position: relative;
  z-index: 999;

  :hover {
    cursor: pointer;
    background: ${styles.colors.text.accent};
  }
`;

const NewListButton: React.FC = () => {
  return (
    <>
      <Wrapper>
        <StyledCircle
          icon={ReactIcon(MdAdd, 24, styles.colors.text.light)}
          background={styles.colors.dark}
        />
      </Wrapper>
    </>
  );
};

export default NewListButton;
