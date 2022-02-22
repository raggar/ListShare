import React from "react";
import { Form } from "react-bootstrap";
import { MdMail, MdPassword } from "react-icons/md";
import { Modal } from "..";
import { Button, ReactIcon, Spacer, Typography } from "../../base";
import { Input } from "../../base";
import { BottomWrapper, ModalProps } from "../Modal";

function RegisterModal(props: ModalProps) {
  return (
    <Modal {...props}>
      <Typography variant="h5">create an account</Typography>
      <Spacer height={24} />
      <Form>
        <Input placeholder="first name" />
        <Spacer height={8} />
        <Input placeholder="last name" />
        <Spacer height={8} />
        <Input icon={ReactIcon(MdMail, 18)} placeholder="email" />
        <Spacer height={8} />
        <Input icon={ReactIcon(MdPassword, 18)} placeholder="password" />
        <Spacer height={8} />
        <Input
          icon={ReactIcon(MdPassword, 18)}
          placeholder="re-type password"
        />
        <Spacer height={24} />
        <BottomWrapper>
          <Button primary type="submit">
            submit
          </Button>
        </BottomWrapper>
      </Form>
    </Modal>
  );
}

export default RegisterModal;
