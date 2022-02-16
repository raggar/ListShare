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

const Lists: React.FC = () => (
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

export default Lists;
