import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import styles from "../../../styles/styles";

export interface TypographyProps extends ComponentPropsWithoutRef<"span"> {
  variant?: string;
  color?: string;
  size?: string;
  ellipsis?: boolean;
}

// todo: refactor this lol

const H1 = styled.span<TypographyProps>`
  font-family: ${styles.fonts.heading};
  font-size: ${({ size }) => size ?? "96px"};
  color: ${({ color }) => color ?? "inherit"};
  font-weight: 700;
  ${({ ellipsis }) =>
    ellipsis
      ? `white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`
      : null};
`;

const H2 = styled.span<TypographyProps>`
  font-family: ${styles.fonts.heading};
  font-size: ${({ size }) => size ?? "60px"};
  color: ${({ color }) => color ?? "inherit"};
  font-weight: 700;
  ${({ ellipsis }) =>
    ellipsis
      ? `white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`
      : null};
`;

const H3 = styled.span<TypographyProps>`
  font-family: ${styles.fonts.heading};
  font-size: ${({ size }) => size ?? "48px"};
  color: ${({ color }) => color ?? "inherit"};
  font-weight: 700;
  ${({ ellipsis }) =>
    ellipsis
      ? `white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`
      : null};
`;

const H4 = styled.span<TypographyProps>`
  font-family: ${styles.fonts.heading};
  font-size: ${({ size }) => size ?? "34px"};
  color: ${({ color }) => color ?? "inherit"};
  font-weight: 600;
  ${({ ellipsis }) =>
    ellipsis
      ? `white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`
      : null};
`;

const H5 = styled.span<TypographyProps>`
  font-family: ${styles.fonts.heading};
  font-size: ${({ size }) => size ?? "24px"};
  color: ${({ color }) => color ?? "inherit"};
  font-weight: 600;
  ${({ ellipsis }) =>
    ellipsis
      ? `white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`
      : null};
`;

const H6 = styled.span<TypographyProps>`
  font-size: ${({ size }) => size ?? "20px"};
  color: ${({ color }) => color ?? "inherit"};
  font-weight: 600;
  ${({ ellipsis }) =>
    ellipsis
      ? `white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`
      : null};
`;

const Body = styled.span<TypographyProps>`
  font-size: ${({ size }) => size ?? "14px"};
  color: ${({ color }) => color ?? "inherit"};
  font-weight: 300;
  ${({ ellipsis }) =>
    ellipsis
      ? `white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`
      : null};
`;

function Typography(props: TypographyProps) {
  switch (props.variant) {
    case "h1":
      return <H1 {...props}>{props.children}</H1>;
    case "h2":
      return <H2 {...props}>{props.children}</H2>;
    case "h3":
      return <H3 {...props}>{props.children}</H3>;
    case "h4":
      return <H4 {...props}>{props.children}</H4>;
    case "h5":
      return <H5 {...props}>{props.children}</H5>;
    case "h6":
      return <H6 {...props}>{props.children}</H6>;
    case "body":
      return <Body {...props}>{props.children}</Body>;
    default:
      return <span>{props.children}</span>;
  }
}

export default Typography;
