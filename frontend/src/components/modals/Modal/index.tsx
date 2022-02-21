import React, { ComponentPropsWithoutRef, useState } from "react";
import styled from "styled-components";
import { CloseButton, Modal as ReactModal } from "react-bootstrap";
import styles from "../../../styles/styles";

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
`

const ModalContent = styled.div`
  padding: ${styles.spacing[4]};
`;

function Modal(props: ModalProps) {

  const Close = styled(CloseButton)`
    position: absolute;
    right: ${styles.spacing[3]};
    top: ${styles.spacing[3]};
  `;

  return (
    <StyledModal show={props.show} centered>
      <Close onClick={(e) => props.setShow(false)} />
      <ModalContent>{props.children}</ModalContent>
    </StyledModal>
  );
}

export default Modal;
