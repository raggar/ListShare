import React from "react";
import { Form } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { Modal } from "..";
import { Button, ReactIcon, Spacer, Typography } from "../../base";
import Input from "../../base/Input";
import { BottomWrapper, ModalProps } from "../Modal";

function AddListModal(props: ModalProps) {
  return (
    <Modal {...props}>
      <Typography variant="h5">new list</Typography>
      <Spacer height={24} />
      <Form>
        <Input icon={ReactIcon(MdEdit, 18)} placeholder="list name" />
        <Spacer height={8} />
        <Input area placeholder="comments" />
        <Spacer height={24} />
        <BottomWrapper>
          <Button primary type="submit">
            save
          </Button>
        </BottomWrapper>
      </Form>
    </Modal>
  );
}

export default AddListModal;
