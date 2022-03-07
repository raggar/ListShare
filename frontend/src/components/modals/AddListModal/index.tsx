import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { Modal } from "..";
import { Button, Spacer, Typography } from "../../base";
import Input from "../../base/Input";
import { ModalProps } from "../Modal";

function AddListModal(props: ModalProps) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    // todo: validate
    // do something with name, comment
  };

  return (
    <Modal
      {...props}
      modalCTA={
        <Button primary type="submit">
          save
        </Button>
      }
    >
      <Typography variant="h5">new list</Typography>
      <Spacer height={24} />
      <Form onSubmit={handleSubmit}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={MdEdit}
          placeholder="list name"
        />
        <Spacer height={8} />
        <Input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          area
          placeholder="comments"
        />
      </Form>
    </Modal>
  );
}

export default AddListModal;
