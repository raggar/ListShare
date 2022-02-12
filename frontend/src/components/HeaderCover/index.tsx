import React from "react";
import styled from "styled-components";
import styles from "../../styles/styles";
import { Container } from "react-bootstrap";
import Typography from "../base/Typography";

const HeaderImage = styled.div`
  min-height: 300px;
  width: 100%;
  background-size: cover;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 100)),
    url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");
`;

const ListName = styled.span`
  font-size: ${styles.fontSizes.lg};
  color: ${styles.colors.white};
`;

export const HeaderCover = () => {
  return (
    <HeaderImage>
      <Container>
        <Typography variant="h1">list name</Typography>
      </Container>
    </HeaderImage>
  );
};
