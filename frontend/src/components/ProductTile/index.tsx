import React, { ComponentPropsWithoutRef, useState } from "react";
import styled from "styled-components";
import styles from "../../styles/styles";
import DropCircle from "../base/DropCircle";
import Typography from "../base/Typography";

type Props = ComponentPropsWithoutRef<"div">;

interface ProductTileProps extends Props {
  title: string;
  comments?: string;
  link?: string;
  price?: string;
  image_url?: string;
  open?: boolean;
  background?: string;
}

const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: ${styles.spacing[4]};
`;

const ImageTile = styled.div<ProductTileProps>`
  width: 100%;
  height: ${({ open }) => (open ? "300px" : "150px")};
  padding: ${styles.spacing[3]};
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 100)),
    url(${({ image_url }) => image_url}) no-repeat center/cover;
`;

const ProductTile: React.FC<ProductTileProps> = (props: ProductTileProps) => {
  const [isOpen, setIsOpen] = useState(props.open);

  return (
    <Wrapper>
      <ImageTile {...props} open={isOpen}>
        {/* <Typography variant="h5">list name</Typography> */}
      </ImageTile>
      <DropCircle
        title={props.title}
        open={isOpen}
        background={styles.colors.background}
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
