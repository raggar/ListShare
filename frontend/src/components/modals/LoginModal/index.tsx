import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { MdMail, MdPassword } from "react-icons/md";
import { Modal } from "..";
import { Button, ReactIcon, Spacer, Typography } from "../../base";
import { Input } from "../../base";
import { BottomWrapper, ModalProps } from "../Modal";

function LoginModal(props: ModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    // todo: validate
    // do something with email, password
  };

  return (
    <Modal {...props}>
      <Typography variant="h5">login</Typography>
      <Spacer height={24} />
      <Form onSubmit={handleSubmit}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={ReactIcon(MdMail, 18)}
          placeholder="email"
        />
        <Spacer height={8} />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={ReactIcon(MdPassword, 18)}
          placeholder="password"
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

export default LoginModal;
