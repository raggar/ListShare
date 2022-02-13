import React from "react";
import styled from "styled-components";
import SideNav from "../components/SideNav";

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
      <SideNav />
      <StyledContent />
    </>
  );
}

export default Home;
