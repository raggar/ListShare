import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import { Modal } from "..";
import { Button, Typography } from "../../base";
import { ModalProps } from "../Modal";

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
      <Form>
        <Form.Group className="mb-3" controlId="formUrl">
          <FormControl placeholder="product link" aria-label="product link" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <FormControl placeholder="product name" aria-label="product name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <FormControl placeholder="price" aria-label="price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formComments">
          <FormControl placeholder="comments" as="textarea" aria-label="comments" />
        </Form.Group>
        <Button primary type="submit">
          save
        </Button>
      </Form>
    </Modal>
  );
}

export default AddItemModal;
