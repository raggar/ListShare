import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { MdMail, MdPassword } from "react-icons/md";
import styled from "styled-components";
import { Modal } from "..";
import styles from "../../../styles/styles";
import { Button, Layout, Spacer, Typography } from "../../base";
import { Input } from "../../base";
import { ModalProps } from "../Modal";
import { registerUser } from "../../../api";

export const StyledRow = styled(Row)`
  margin: ${styles.spacing[0]};
`;

export const StyledCol = styled(Col)`
  margin: ${styles.spacing[0]};
  padding: ${styles.spacing[0]};
`;

function RegisterModal(props: ModalProps) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (password != confirmPassword) {
      return;
    }

    try {
      await registerUser({
        firstname,
        lastname,
        email,
        password,
      });
    } catch (e) {
      console.log(e);
    }
    props.setShow(false);
  };

  return (
    <Modal {...props}>
      <Typography variant="h5">create an account</Typography>
      <Spacer height={24} />
      <Form onSubmit={handleSubmit}>
        <Layout>
          <Input
            placeholder="first name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <Spacer width={8} />

          <Input
            placeholder="last name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Layout>
        <Spacer height={8} />
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
        <Spacer height={8} />
        <Input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon={MdPassword}
          placeholder="re-type password"
        />
        <Button primary type="submit">
          submit
        </Button>
      </Form>
    </Modal>
  );
}

export default RegisterModal;
