import React, {
  ComponentPropsWithoutRef,
  Dispatch,
  SetStateAction,
} from "react";
import styled from "styled-components";
import { Modal as ReactModal } from "react-bootstrap";
import styles from "../../../styles/styles";
import { ReactIcon } from "../../base";
import { MdClose } from "react-icons/md";

type Props = ComponentPropsWithoutRef<"div">;

export interface ModalProps extends Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  modalCTA?: JSX.Element;
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

const CloseWrapper = styled.div`
  position: absolute;
  right: ${styles.spacing[2]};
  top: ${styles.spacing[2]};

  :hover {
    cursor: pointer;
    color: ${styles.colors.text.accent};
  }
`;

function Modal(props: ModalProps) {
  return (
    <StyledModal show={props.show} centered>
      <CloseWrapper onClick={() => props.setShow(false)}>
        {ReactIcon(MdClose, 24)}
      </CloseWrapper>
      <ModalContent>{props.children}</ModalContent>
      {props.modalCTA ?? null}
    </StyledModal>
  );
}

export default Modal;
