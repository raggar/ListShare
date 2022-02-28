import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import styles from "../../../styles/styles";

export interface TypographyProps extends ComponentPropsWithoutRef<"span"> {
  variant?: string;
  color?: string;
  size?: string;
}

const H1 = styled.span<TypographyProps>`
  font-size: ${({ size }) => size ?? "96px"};
  color: ${({ color }) => color ?? styles.colors.text.light}};
  font-weight: 700;
`;

const H2 = styled.span<TypographyProps>`
  font-size: ${({ size }) => size ?? "60px"};
  color: ${({ color }) => color ?? styles.colors.text.light}};
  font-weight: 700;
`;

const H3 = styled.span<TypographyProps>`
  font-size: ${({ size }) => size ?? "48px"};
  color: ${({ color }) => color ?? styles.colors.text.light}};
  font-weight: 700;
`;

const H4 = styled.span<TypographyProps>`
  font-size: ${({ size }) => size ?? "34px"};
  color: ${({ color }) => color ?? styles.colors.text.dark}};
  font-weight: 600;
`;

const H5 = styled.span<TypographyProps>`
  font-size: ${({ size }) => size ?? "24px"};
  color: ${({ color }) => color ?? styles.colors.text.dark}};
  font-weight: 600;
`;

const H6 = styled.span<TypographyProps>`
  font-size: ${({ size }) => size ?? "20px"};
  color: ${({ color }) => color ?? styles.colors.text.dark}};
  font-weight: 600;
`;

const Body = styled.span<TypographyProps>`
  font-size: ${({ size }) => size ?? "18px"};
  color: ${({ color }) => color ?? styles.colors.text.dark}};
  font-weight: 300;
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
