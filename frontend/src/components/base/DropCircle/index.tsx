import React, { ComponentPropsWithoutRef, useState } from "react";
import { Row, Stack } from "react-bootstrap";
import styled from "styled-components";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import styles from "../../../styles/styles";
import Circle from "../Circle";
import { ReactIcon } from "../ReactIcon";

type Props = ComponentPropsWithoutRef<"div">;

interface DropCircleProps extends Props {
  open?: boolean;
  size?: number;
  title?: string;
  last?: boolean;
  first?: boolean;
  background?: string;
  onClick?: () => void;
}

const Wrapper = styled.div<DropCircleProps>`
  border-left: ${({ last }) => !last && `0.5px solid ${styles.colors.dark}`};
  margin-left: 18px;
  padding: ${styles.spacing[3]};
  padding-top: ${({ first }) => (first ? styles.spacing[6] : styles.spacing[0])};
  position: relative;
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
  color: ${styles.colors.text.secondary};
  transition: max-height 0.7s, opacity 3s, visibility 4s ease;
`;

const DropTitle = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DropCircle: React.FC<DropCircleProps> = (props: DropCircleProps) => {
  const [isOpen, setIsOpen] = useState(props.open);

  return (
    <>
      <Wrapper {...props}>
        <Row>
          <Title direction="horizontal" onClick={() => setIsOpen(!isOpen)}>
            <StyledCircle
              icon={
                isOpen
                  ? ReactIcon(MdExpandLess, 22)
                  : ReactIcon(MdExpandMore, 22)
              }
              background={props.background}
            />
            <DropTitle className="my-auto ms-3">{props.title}</DropTitle>
          </Title>
        </Row>
        <Row>
          {isOpen ? <Details className="ms-3">{props.children}</Details> : null}
        </Row>
      </Wrapper>
    </>
  );
};

export default DropCircle;
