import React from "react";
import Button from "../components/base/Button";
import styled, { ThemeProvider } from "styled-components";
import styles from "../styles/styles";
import GlobalStyle from "../styles/global";
import SideNav from "../components/SideNav";
import { Row } from "react-bootstrap";

const Content: React.FC = () => (
  <>
    <p>hello</p>
  </>
);

const StyledContent = styled(Content)`
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <>
      <Row>
        <SideNav />
        <StyledContent />
      </Row>
    </>
  );
}

export default Home;
