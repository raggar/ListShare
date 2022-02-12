import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { HeaderCover } from "../components/HeaderCover";
import SideNav from "../components/SideNav";
import styles from "../styles/styles";
import PageWrapper from "./PageWrapper";

const PageContent = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${styles.colors.background};
`

function Lists() {
  return (
    <PageWrapper>
      <PageContent>
        <HeaderCover />
      </PageContent>
    </PageWrapper>
  );
}

export default Lists;
