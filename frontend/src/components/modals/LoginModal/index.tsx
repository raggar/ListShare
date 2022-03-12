import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { MdMail, MdPassword } from "react-icons/md";
import { Modal } from "..";
import { Button, Spacer, Typography } from "../../base";
import { Input } from "../../base";
import { ModalProps } from "../Modal";
import { loginUser } from "../../../api";

function LoginModal(props: ModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await loginUser({
        email,
        password,
      });
    } catch (e) {
      console.log(e);
    }
    props.setShow(false);
  };

  return (
    <Modal
      {...props}
      modalCTA={
        <Button primary type="submit">
          submit
        </Button>
      }
    >
      <Typography variant="h5">login</Typography>
      <Spacer height={24} />
      <Form onSubmit={handleSubmit}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={MdMail}
          placeholder="email"
        />
        <Spacer height={8} />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={MdPassword}
          placeholder="password"
        />
      </Form>
    </Modal>
  );
}

export default LoginModal;
