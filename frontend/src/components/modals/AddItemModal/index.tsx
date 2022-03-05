import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { MdAttachMoney, MdEdit, MdLink } from "react-icons/md";
import { Modal } from "..";
import { Button, Input, Spacer, Typography } from "../../base";
import { BottomWrapper, ModalProps } from "../Modal";

interface AddItemModalProps extends ModalProps {
  listName?: string;
}

function AddItemModal(props: AddItemModalProps) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [comment, setComment] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    // todo: validate
    // do something with name, url, comment, price
  };

  return (
    <Modal {...props}>
      <Typography variant="h5">
        add item
        {props.listName ? `to &quot;${props.listName}&quot;` : ""}
      </Typography>
      <Spacer height={24} />
      <Form onSubmit={handleSubmit}>
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          icon={MdLink}
          placeholder="product url"
        />
        <Spacer height={8} />
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={MdEdit}
          placeholder="product name"
        />
        <Spacer height={8} />
        <Input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          icon={MdAttachMoney}
          placeholder="price"
        />
        <Spacer height={8} />
        <Input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          area
          placeholder="comments"
        />
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
