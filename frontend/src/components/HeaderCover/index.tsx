import React from "react";
import styled from "styled-components";
import styles from "../../styles/styles";
import { Container } from "react-bootstrap";
import { Typography, Spacer } from "../";
// import { Parallax } from "react-scroll-parallax";

interface HeaderProps {
  url?: string;
}

const HeaderWrapper = styled.div``;

const HeaderImage = styled.div<HeaderProps>`
  position: relative;
  min-height: 240px;
  width: 100%;
  padding: ${styles.spacing[4]};
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 100)),
    url("${({ url }) => url ?? null}") no-repeat;
  background-position: center center;
  background-size: cover;
`;

// const ImageParallax = styled.img`
//   width: 100%;
//   position: absolute;
//   top: 50%;
//   z-index: -1000;
//   overflow: hidden;
// `;

const HeaderCover = () => {
  const url =
    "https://cdn.vox-cdn.com/thumbor/9zHVj4OnM5pYeO8rCX-W4aL-lw0=/0x0:4428x1993/1200x800/filters:focal(1872x1198:2580x1906)/cdn.vox-cdn.com/uploads/chorus_image/image/63371518/shutterstock_785442694.0.jpg";

  return (
    <>
      <HeaderWrapper>
        {/* <Parallax speed={-30}>
            <ImageParallax src={url} /> */}
        {/* </Parallax> */}
        <HeaderImage url={url}>
          <Container>
            <Typography variant="h4" color={styles.colors.text.light}>
              super cool list name
            </Typography>
            <Spacer height={styles.spacing[1]} />
            <Typography variant="body" color={styles.colors.text.light}>
              we&apos;ve known each other for so long...your heart&apos;s been
              aching but you&apos;re too shy to say it.
            </Typography>
          </Container>
        </HeaderImage>
      </HeaderWrapper>
    </>
  );
};

export default HeaderCover;
