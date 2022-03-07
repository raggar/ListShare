import React from "react";
import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { SideNav } from "../";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  flex: 1 1 auto;
`;

const PageWrapper: React.FC = (props: ComponentPropsWithoutRef<"div">) => (
  <Wrapper>
    <SideNav />
    <Page>{props.children}</Page>
  </Wrapper>
);

export default PageWrapper;
