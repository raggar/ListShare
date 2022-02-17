import React from "react";
import styled from "styled-components";
import styles from "../../styles/styles";
import { Container } from "react-bootstrap";
import { Typography, Spacer } from "../";

const HeaderImage = styled.div`
  min-height: 300px;
  width: 100%;
  padding: ${styles.spacing[4]};
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 100)),
    url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png")
      no-repeat center/cover;
`;

const HeaderCover = () => {
  return (
    <HeaderImage>
      <Container>
        <Typography variant="h1">list name</Typography>
        <Spacer height={styles.spacing[1]} />
        <Typography variant="body" color={styles.colors.text.light}>
          we&apos;ve known each other for so long...your heart&apos;s been
          aching but you&apos;re too shy to say it.
        </Typography>
      </Container>
    </HeaderImage>
  );
};

export default HeaderCover;
