import React, { ComponentPropsWithoutRef, useState } from "react";
import styled from "styled-components";
import styles from "../../styles/styles";
import { motion } from "framer-motion";
import { IconButton, ReactIcon, Spacer, Typography, DropCircle } from "../base";
import { MdEdit, MdFavorite, MdFavoriteBorder } from "react-icons/md";

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

// interface ProductTitleProps {
// isOpen: boolean;
// }

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
  border-radius: ${styles.spacing[1]};
  background: url(${({ imageUrl: image_url }) => image_url}) no-repeat
    center/cover;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  padding: ${styles.spacing[2]};
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  border-radius: ${styles.spacing[1]};
  background: rgba(0, 0, 0, 0.5);
`;

const MotionOverlay = motion(Overlay);

// const ProductTitle = styled(Typography)<ProductTitleProps>`
//   ${({ isOpen }) =>
//     !isOpen
//       ? `white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;`
//       : null}
// `;

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
        <ImageTile {...props} open={isOpen}>
          <MotionOverlay
            animate={{
              opacity: isHover ? 1 : 0,
            }}
          >
            <TopOptions>
              <IconButton icon={ReactIcon(MdEdit, 24)} />
              <Spacer width={styles.spacing[1]} />
              <IconButton
                icon={ReactIcon(MdFavoriteBorder, 24)}
                selectedIcon={ReactIcon(MdFavorite, 24)}
              />
            </TopOptions>
            <a href={props.productUrl} style={{ textDecoration: "none" }}>
            <Typography variant="body">Visit link</Typography>
              {/* <ProductTitle
                isOpen={isOpen ?? false}
                variant="h6"
                color={styles.colors.text.light}
              >
                {props.title}
              </ProductTitle> */}
            </a>
          </MotionOverlay>
        </ImageTile>
      </motion.div>
      <DropCircle
        title={props.title}
        open={isOpen}
        background={styles.colors.rice}
        setState={setIsOpen}
        last
        isProductDropdown
      >
        <Typography variant="body">{props.comments}</Typography>
      </DropCircle>
    </Wrapper>
  );
};

export default ProductTile;
