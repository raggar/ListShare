import React, {
  ComponentPropsWithoutRef,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { Row, Stack } from "react-bootstrap";
import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
import styles from "../../../styles/styles";
import { Circle, ReactIcon, Spacer, Typography } from "../";
import { motion } from "framer-motion";

type Props = ComponentPropsWithoutRef<"div">;

interface DropCircleProps extends Props {
  open?: boolean;
  size?: number;
  title?: string;
  last?: boolean;
  first?: boolean;
  background?: string;

  isProductDropdown?: boolean;

  specialIcon?: JSX.Element;
  clickAction?: () => void;

  setState?: Dispatch<SetStateAction<boolean | undefined>>;
}

const Wrapper = styled.div<DropCircleProps>`
  border-left: ${({ last }) => !last && `0.5px solid ${styles.colors.dark}`};
  margin-left: 18px;
  padding: ${styles.spacing[3]};
  padding-top: ${({ first }) =>
    first ? styles.spacing[6] : styles.spacing[0]};
  padding-bottom: ${({ last }) =>
    last ? styles.spacing[0] : styles.spacing[3]};
  position: relative;
`;

const TopWrapper = styled.div`
  border-left: 0.5px solid ${styles.colors.dark};
  margin-left: -${styles.spacing[3]};
  height: ${styles.spacing[2]};
`;

const Title = styled(Stack)`
  height: ${({ size }) => size ?? 36}px;

  &:hover {
    cursor: pointer;
    color: ${styles.colors.text.accent};
  }
`;

const StyledCircle = styled(Circle)`
  left: -${({ size }) => (size ? size / 2 : 18)}px;
  position: absolute;
`;

const Details = styled.div`
  padding-left: ${styles.spacing[1]};
  color: ${styles.colors.text.secondary};
  overflow: hidden;
`;

const DropCircle: React.FC<DropCircleProps> = (props: DropCircleProps) => {
  const [isOpen, setIsOpen] = useState(props.open);

  const handleClick = () => {
    if (props.clickAction) props.clickAction();
    else {
      setIsOpen(!isOpen);
      if (props.setState) props.setState(!isOpen);
    }
  };

  return (
    <>
      <Wrapper {...props}>
        {props.isProductDropdown && <TopWrapper />}
        <Row>
          <Title direction="horizontal" onClick={handleClick}>
            <StyledCircle
              icon={props.specialIcon ?? ReactIcon(MdExpandMore, 22)}
              open={isOpen}
              background={props.background}
            />
            <Spacer width={styles.spacing[1]} />
            <Typography variant="body" ellipsis={!isOpen}>
              {props.title}
            </Typography>
          </Title>
        </Row>
        <Row>
          {isOpen ? (
            <motion.div initial={{ y: -24 }} animate={{ y: 0 }}>
              <Details>{props.children}</Details>
            </motion.div>
          ) : null}
        </Row>
      </Wrapper>
    </>
  );
};

export default DropCircle;
