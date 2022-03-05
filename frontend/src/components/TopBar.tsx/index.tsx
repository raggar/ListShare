import React from "react";
import styled from "styled-components";
import styles from "../../styles/styles";
import { Container } from "react-bootstrap";
import { Layout, Typography, Switch } from "..";

interface HeaderProps {
  url?: string;
}

const StyledBar = styled.div<HeaderProps>`
  position: sticky;
  top: 0;
  z-index: 999;
  height: ${styles.spacing[5]};
  border-bottom: 0.5px solid ${styles.colors.concrete};
  padding: 0px ${styles.spacing[4]};
  width: 100%;
  background: ${styles.colors.white};
`;

const InnerLayout = styled(Layout)`
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const TopBar = () => {
  return (
    <>
      <StyledBar>
        <Container style={{ margin: 0, height: "100%" }}>
          <InnerLayout>
            <Typography variant="body">list name goes here</Typography>
            <Switch />
          </InnerLayout>
        </Container>
      </StyledBar>
    </>
  );
};

export default TopBar;
