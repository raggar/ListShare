import React from "react";
import styled from "styled-components";

const Content: React.FC = () => <p>hello</p>;

const StyledContent = styled(Content)`
  width: 100%;
  height: 100%;
`;

const Lists: React.FC = () => <StyledContent />;

export default Lists;
