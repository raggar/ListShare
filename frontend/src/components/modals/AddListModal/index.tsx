import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import { Modal } from "..";
import { Button, Typography } from "../../base";
import { ModalProps } from "../Modal";

function AddListModal(props: ModalProps) {
  return (
    <Modal {...props}>
      <Typography variant="h5">new list</Typography>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <FormControl placeholder="list name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formComments">
          <FormControl
            placeholder="comments"
            as="textarea"
            aria-label="comments"
          />
        </Form.Group>
        <Button primary type="submit">
          save
        </Button>
      </Form>
    </Modal>
  );
}

export default AddListModal;
