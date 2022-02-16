import React from "react";
import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import SideNav from "../components/SideNav";
import styles from "../styles/styles";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: ${styles.colors.background};
  flex: 1 1 auto;
`;

function PageWrapper(props: ComponentPropsWithoutRef<"div">) {
  return (
    <Wrapper>
      <SideNav />
      <Page>{props.children}</Page>
    </Wrapper>
  );
}

export default PageWrapper;
