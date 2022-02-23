import React, { ComponentPropsWithoutRef, useState } from "react";
import styled from "styled-components";
import { Modal as ReactModal, Row } from "react-bootstrap";
import styles from "../../../styles/styles";
import { ReactIcon } from "../../base";
import { MdClose } from "react-icons/md";

type Props = ComponentPropsWithoutRef<"div">;

export interface ModalProps extends Props {
  show: boolean;
  setShow: (show: boolean) => void;
}

const StyledModal = styled(ReactModal)`
  .modal-content {
    border: ${styles.spacing[0]};
    border-radius: ${styles.spacing[0]};
  }
`;

const ModalContent = styled.div`
  padding: ${styles.spacing[4]};
`;

function Modal(props: ModalProps) {
  const CloseWrapper = styled.div`
    position: absolute;
    right: ${styles.spacing[2]};
    top: ${styles.spacing[2]};

    :hover {
      cursor: pointer;
      color: ${styles.colors.text.accent};
    }
  `;

  return (
    <StyledModal show={props.show} centered>
      <CloseWrapper onClick={(e) => props.setShow(false)}>
        {ReactIcon(MdClose, 24)}
      </CloseWrapper>
      <ModalContent>{props.children}</ModalContent>
    </StyledModal>
  );
}

export default Modal;

export const BottomWrapper = styled(Row)`
  justify-content: flex-end;
  margin: ${styles.spacing[0]};
`;
