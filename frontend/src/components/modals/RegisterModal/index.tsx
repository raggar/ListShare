import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import { Modal } from "..";
import { Button, Typography } from "../../base";
import { ModalProps } from "../Modal";

function RegisterModal(props: ModalProps) {
  return (
    <Modal {...props}>
      <Typography variant="h5">create an account</Typography>
      <Form>
        <Form.Group className="mb-3" controlId="formLast">
          <FormControl placeholder="first name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFirst">
          <FormControl placeholder="last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <FormControl placeholder="email address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <FormControl placeholder="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirm">
          <FormControl placeholder="retype password" />
        </Form.Group>
        <Button primary type="submit">
          submit
        </Button>
      </Form>
    </Modal>
  );
}

export default RegisterModal;
