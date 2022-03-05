import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import {
  Layout,
  TextButton,
  Spacer,
  Typography,
  HeaderCover,
  ProductTile,
  PageWrapper,
  Input,
} from "../components/";

import { PageContent } from "../styles/page-content";
import styles from "../styles/styles";
import { AddItemModal } from "../components/modals";
import TopBar from "../components/TopBar.tsx";
import { MdLink } from "react-icons/md";

// todo: fix media queries
const LayoutContainer = styled.div`
  grid-column-gap: ${styles.spacing[3]};
  grid-row-gap: ${styles.spacing[3]};
  column-gap: ${styles.spacing[3]};

  @media (min-width: ${styles.breakpoints.sm}px) {
    columns: 2;
  }

  @media (min-width: ${styles.breakpoints.lg}px) {
    columns: 3;
  }

  @media (max-width: ${styles.breakpoints.xs}px) {
    columns: 1;
  }
`;

const Lists: React.FC = () => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");

  return (
    <PageWrapper>
      <AddItemModal show={show} setShow={setShow} />
      <TopBar />
      <HeaderCover />
      <PageContent>
        <Container>
          <Layout>
            <Input
              placeholder="paste a link"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              icon={MdLink}
              width="400px"
            />
            <Layout style={{ alignItems: "flex-end" }}>
              <Spacer width={16} />
              <Typography variant="body"> or </Typography>
              <Spacer width={4} />
              <TextButton hoverColor={styles.colors.text.accent}>
                <Typography variant="body" onClick={() => setShow(true)}>
                  add custom item
                </Typography>
              </TextButton>
            </Layout>
          </Layout>
          <Spacer height={styles.spacing[4]} />
          <LayoutContainer>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((id) => (
              <ProductTile
                key={id}
                title="OEM Dye-Sub PBT Keycap Set - Orange"
                comments="Made of highly durable PBT plastic and featured dye-sublimated legends, this keycap set can withstand even the toughest users. Fully compatible with MX mechanical switches, it's a great fit for today's boards."
                imageUrl="https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-q1-q2-k2-oem-dye-sub-pbt-keycap-set-orange_1800x1800.jpg?v=1645760904"
                productUrl="https://www.keychron.com/collections/keychron-keycap-collection-1/products/copy-of-q1-k2-oem-dye-sub-pbt-keycap-set-ocean"
                background="inherit"
              />
            ))}
          </LayoutContainer>
        </Container>
      </PageContent>
    </PageWrapper>
  );
};

export default Lists;
