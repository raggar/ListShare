import React, { ComponentPropsWithoutRef, useState } from "react";
import styled from "styled-components";
import styles from "../../styles/styles";
import { DropCircle, Typography } from "../";
import { motion } from "framer-motion";
import { IconButton, ReactIcon, Spacer } from "../base";
import { MdFavorite, MdFavoriteBorder, MdMoreVert } from "react-icons/md";

type Props = ComponentPropsWithoutRef<"div">;

interface ProductTileProps extends Props {
  title: string;
  comments?: string;
  link?: string;
  price?: string;
  productUrl?: string;
  imageUrl?: string;
  open?: boolean;
  background?: string;
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

// const MotionTile = motion(ImageTile, { forwardMotionProps: true });

const ProductTile: React.FC<ProductTileProps> = (props: ProductTileProps) => {
  const [isOpen, setIsOpen] = useState(props.open);
  const [isHover, setIsHover] = useState(false);

  return (
    <Wrapper>
      <motion.div
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        animate={{
          height: isOpen ? "300px" : "150px",
          scale: isHover ? 1.03 : 1,
        }}
      >
        <a href={props.productUrl}>
          <ImageTile {...props} open={isOpen}>
            <TopOptions>
              <IconButton
                icon={ReactIcon(MdFavoriteBorder, 24)}
                selectedIcon={ReactIcon(MdFavorite, 24)}
              />
              <Spacer width={styles.spacing[1]} />
              <IconButton icon={ReactIcon(MdMoreVert, 24)} />
            </TopOptions>
            <Typography variant="h5" color={styles.colors.text.light}>
              {props.title}
            </Typography>
          </ImageTile>
        </a>
      </motion.div>

      <DropCircle
        title={isOpen ? "show less" : "show more"}
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
