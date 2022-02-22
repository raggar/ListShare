import React from "react";
import { Form } from "react-bootstrap";
import { MdEdit, MdLink } from "react-icons/md";
import { Modal } from "..";
import { Button, Input, ReactIcon, Spacer, Typography } from "../../base";
import { BottomWrapper, ModalProps } from "../Modal";

interface AddItemModalProps extends ModalProps {
  listName?: string;
}

function AddItemModal(props: AddItemModalProps) {
  return (
    <Modal {...props}>
      <Typography variant="h5">
        add item
        {props.listName ? `to &quot;${props.listName}&quot;` : ""}
      </Typography>
      <Spacer height={24} />
      <Form>
        <Input icon={ReactIcon(MdLink, 18)} placeholder="product url" />
        <Spacer height={8} />
        <Input icon={ReactIcon(MdEdit, 18)} placeholder="product name" />
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

export default AddItemModal;
