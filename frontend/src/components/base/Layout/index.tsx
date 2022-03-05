import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

export interface LayoutProps extends ComponentPropsWithoutRef<"div"> {
  col?: boolean;
  width?: string;
  height?: string;
}

// todo: add breakpoints
const Layout = styled.div<LayoutProps>`
  display: flex;
  flex-flow: ${({ col }) => (col ? "column" : "row")};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default Layout;
