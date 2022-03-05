import React from "react";
import styled from "styled-components";
import styles from "../../styles/styles";
import { Container } from "react-bootstrap";
import { Typography } from "..";

interface HeaderProps {
  url?: string;
}

const StyledBar = styled.div<HeaderProps>`
  position: absolute;
  top: 0;
  z-index: 999;
  height: ${styles.spacing[5]};
  border-bottom: 0.5px solid ${styles.colors.concrete};
  padding: 0px ${styles.spacing[4]};
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  background: ${styles.colors.white};
`;

const TopBar = () => {
  return (
    <>
      <StyledBar>
        <Container style={{ margin: 0 }}>
          <Typography variant="body">list name goes here</Typography>
        </Container>
      </StyledBar>
    </>
  );
};

export default TopBar;
