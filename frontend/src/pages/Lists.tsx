import React from "react";
import { Container, Stack } from "react-bootstrap";
import styled from "styled-components";
import NewButton from "../components/base/Button/NewButton";
import Spacer from "../components/base/Spacer";
import Typography from "../components/base/Typography";
import { HeaderCover } from "../components/HeaderCover";
import ProductTile from "../components/ProductTile";
import styles from "../styles/styles";
import PageWrapper from "./PageWrapper";
import { PageContent } from "./styled";

const LayoutContainer = styled.div`
  // display: grid;
  grid-column-gap: ${styles.spacing[3]};
  grid-row-gap: ${styles.spacing[3]};
  columns: 3;
  column-gap: ${styles.spacing[3]};
`;

const Title = styled(Stack)`
  height: ${({ size }) => size ?? 36}px;

  &:hover {
    cursor: pointer;
    color: ${styles.colors.text.accent};
  }

  &:hover div {
    background: ${styles.colors.text
      .accent}; // might not be the best way to do this
  }
`;

function Lists() {
  return (
    <PageWrapper>
      <HeaderCover />
      <PageContent>
        <Container>
          <Title direction="horizontal" onClick={() => {}}>
            <NewButton />
            <Spacer width={styles.spacing[3]} />
            <Typography>add new item...</Typography>
          </Title>
          <Spacer height={styles.spacing[4]} />
          <LayoutContainer>
            <ProductTile
              title="hello"
              comments="my favourite thing ever"
              image_url="https://cdn.faire.com/fastly/ced81555a95aa0b114baa5874d5c8eb04119a37021c7389eca42fb698df23605.jpeg?dpr=2&fit=crop&format=jpg&height=400&width=320"
              link=""
              background="inherit"
            />
            <ProductTile
              title="hello"
              comments="my favourite thing ever"
              image_url="https://cdn.faire.com/fastly/ced81555a95aa0b114baa5874d5c8eb04119a37021c7389eca42fb698df23605.jpeg?dpr=2&fit=crop&format=jpg&height=400&width=320"
              link=""
              background="inherit"
            />
            <ProductTile
              title="hello"
              comments="my favourite thing ever"
              image_url="https://cdn.faire.com/fastly/ced81555a95aa0b114baa5874d5c8eb04119a37021c7389eca42fb698df23605.jpeg?dpr=2&fit=crop&format=jpg&height=400&width=320"
              link=""
              background="inherit"
            />
            <ProductTile
              title="hello"
              comments="my favourite thing ever"
              image_url="https://cdn.faire.com/fastly/ced81555a95aa0b114baa5874d5c8eb04119a37021c7389eca42fb698df23605.jpeg?dpr=2&fit=crop&format=jpg&height=400&width=320"
              link=""
              background="inherit"
            />
            <ProductTile
              title="hello"
              comments="my favourite thing ever"
              image_url="https://cdn.faire.com/fastly/ced81555a95aa0b114baa5874d5c8eb04119a37021c7389eca42fb698df23605.jpeg?dpr=2&fit=crop&format=jpg&height=400&width=320"
              link=""
              background="inherit"
            />
            <ProductTile
              title="hello"
              comments="my favourite thing ever"
              image_url="https://cdn.faire.com/fastly/ced81555a95aa0b114baa5874d5c8eb04119a37021c7389eca42fb698df23605.jpeg?dpr=2&fit=crop&format=jpg&height=400&width=320"
              link=""
              background="inherit"
            />
            <ProductTile
              title="hello"
              comments="my favourite thing ever"
              image_url="https://cdn.faire.com/fastly/ced81555a95aa0b114baa5874d5c8eb04119a37021c7389eca42fb698df23605.jpeg?dpr=2&fit=crop&format=jpg&height=400&width=320"
              link=""
              background="inherit"
            />
            <ProductTile
              title="hello"
              comments="my favourite thing ever"
              image_url="https://cdn.faire.com/fastly/ced81555a95aa0b114baa5874d5c8eb04119a37021c7389eca42fb698df23605.jpeg?dpr=2&fit=crop&format=jpg&height=400&width=320"
              link=""
              background="inherit"
            />
            <ProductTile
              title="hello"
              comments="my favourite thing ever"
              image_url="https://cdn.faire.com/fastly/ced81555a95aa0b114baa5874d5c8eb04119a37021c7389eca42fb698df23605.jpeg?dpr=2&fit=crop&format=jpg&height=400&width=320"
              link=""
              background="inherit"
            />
          </LayoutContainer>
        </Container>
      </PageContent>
    </PageWrapper>
  );
}

export default Lists;

// .masonry {
//   columns: 1;
//   column-gap: 24px;
// }
// .masonry-item {
//   display: inline-block;
//   vertical-align: top;
//   margin-bottom: 24px;
// }
// @media only screen and (max-width: 1023px) and (min-width: 768px) {  .masonry {
//     columns: 2;
//   }
// }
// @media only screen and (min-width: 1024px) {
//   .masonry {
//     columns: 3;
//   }
// }
// .masonry-item, .masonry-content {
//   border-radius: 4px;
//   overflow: hidden;
// }
// .masonry-item {
//   filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, .3));
//   transition: filter .25s ease-in-out;
// }
// .masonry-item:hover {
//   filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, .3));
// }
// .masonry-footer {
//   font-size: .75em;
//   opacity: .25;
//   text-align: center;
//   padding-top: 3em;
//   padding-bottom: 3em;
//   margin-bottom: -1.5em;
//   transition: opacity 1s ease-in-out;
// }
// .masonry-footer a {
//   color: currentColor;
// }
// .masonry-footer:hover, .masonry-footer:active, .masonry-footer:focus {
//   opacity: .75;
// }
//   </style>
// </head>
// <body>
//   <div class="masonry-wrapper"><div class="masonry">
//   <div class="masonry-item">
//     <img src="https://picsum.photos/450/325?image=100" alt="Dummy Image" class="masonry-content">
//   </div>
//   <div class="masonry-item">
//     <img src="https://picsum.photos/450/300?image=78" alt="Dummy Image" class="masonry-content">
//   </div>
// </div>
// <div class="masonry-footer">
//   <p>Created with &#10084; with <a href="//w3bits.com/tools/masonry-generator/" target="_blank" rel="external noopener nofollow">CSS Masonry Generator</a></p>
// </div>  </div>
// </body>
// </html>
