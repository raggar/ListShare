import React, { ComponentPropsWithoutRef, useState } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-feather";
import styled from "styled-components";
import styles from "../../../styles/styles";
import Circle from "../Circle";

type Props = ComponentPropsWithoutRef<"div">;

interface DropCircleProps extends Props {
  open?: boolean;
  size?: number;
  title?: string;
  last?: boolean;
}

const Wrapper = styled.div<DropCircleProps>`
  border-left: ${({ last }) => (!last && `1px solid ${styles.colors.black}`)};
  margin-left: 18px;
  padding: ${styles.spacing.md};
  padding-bottom: ${styles.spacing.md};
  padding-top: 0;
  position: relative;
`;

const Title = styled(Stack)`
  height: ${({ size }) => (size ?? 36)}px;
`;

const StyledCircle = styled(Circle)`
  left: -${({ size }) => (size ? size / 2 : 18)}px;
  position: absolute;
`;

const Details = styled.div`
  color: ${styles.colors.text.secondary};
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
      <Wrapper last={props.last}>
        <Row>
          <Title direction="horizontal">
            <StyledCircle
              icon={isOpen ? ChevronUp : ChevronDown}
              onClick={() => setIsOpen(!isOpen)}
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
