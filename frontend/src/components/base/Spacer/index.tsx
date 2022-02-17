import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

export interface SpacerProps extends ComponentPropsWithoutRef<"div"> {
  width?: number | string;
  height?: number | string;
  display?: string;
}

const getSpacerSize = (size: number | string | undefined) => {
  if (typeof size === "number") {
    return `${size}px`;
  } else if (typeof size === "string") {
    return size;
  } else {
    return 0;
  }
};

const Spacer = styled.div<SpacerProps>`
  width: ${({ width }) => getSpacerSize(width)};
  min-width: ${({ width }) => getSpacerSize(width)};
  height: ${({ height }) => getSpacerSize(height)};
  min-height: ${({ height }) => getSpacerSize(height)};
  display: ${({ display }) => display};
`;

export default Spacer;
