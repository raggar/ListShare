import React, { ComponentPropsWithoutRef, useState } from "react";
import styled from "styled-components";
import styles from "../../styles/styles";
import { motion } from "framer-motion";
import { IconButton, ReactIcon, Spacer, Typography, DropCircle } from "../base";
import { MdFavorite, MdFavoriteBorder, MdMoreVert } from "react-icons/md";

type Props = ComponentPropsWithoutRef<"div">;

interface ProductTileProps extends Props {
  title: string;
  comments?: string;
  price?: string;
  productUrl?: string;
  imageUrl?: string;
  open?: boolean;
  background?: string;
}

interface ProductTitleProps {
  isOpen: boolean;
}

const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: ${styles.spacing[4]};
`;

const TopOptions = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: ${styles.colors.text.light};
  padding: ${styles.spacing[2]};
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
`;

const ImageTile = styled.div<ProductTileProps>`
  width: 100%;
  height: 100%;
  padding: ${styles.spacing[2]};
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  border-radius: ${styles.spacing[2]};
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 100)),
    url(${({ imageUrl: image_url }) => image_url}) no-repeat center/cover;

  :hover {
    cursor: pointer;
  }
`;

const ProductTitle = styled(Typography)<ProductTitleProps>`

  ${({ isOpen }) =>
    !isOpen
      ? `white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`
      : null}
`;

const ProductTile: React.FC<ProductTileProps> = (props: ProductTileProps) => {
  const [isOpen, setIsOpen] = useState(props.open);
  const [isHover, setIsHover] = useState(false);

  return (
    <Wrapper>
      <motion.div
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        animate={{
          height: isOpen ? "240px" : "120px",
          scale: isHover ? 1.03 : 1,
        }}
      >
        <a href={props.productUrl} style={{ textDecoration: "none" }}>
          <ImageTile {...props} open={isOpen}>
            <TopOptions>
              <IconButton
                icon={ReactIcon(MdFavoriteBorder, 24)}
                selectedIcon={ReactIcon(MdFavorite, 24)}
              />
              <Spacer width={styles.spacing[1]} />
              <IconButton icon={ReactIcon(MdMoreVert, 24)} />
            </TopOptions>
            <ProductTitle
              isOpen={isOpen ?? false}
              variant="h6"
              color={styles.colors.text.light}
            >
              {props.title}
            </ProductTitle>
          </ImageTile>
        </a>
      </motion.div>

      <DropCircle
        title={isOpen ? "show less..." : props.comments}
        open={isOpen}
        background={styles.colors.white}
        setState={setIsOpen}
        last
        isProductDropdown
      >
        <Typography>{props.comments}</Typography>
      </DropCircle>
    </Wrapper>
  );
};

export default ProductTile;
