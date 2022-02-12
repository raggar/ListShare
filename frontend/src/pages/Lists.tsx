import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import SideNav from "../components/SideNav";

const Content: React.FC = () => (
  <>
    <p>hello</p>
  </>
);

const ListPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

function Lists() {
  return (
    <ListPage>
      <SideNav />
      <Container fluid />
    </ListPage>
  );
}

export default Lists;
