import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { MdMail, MdPassword } from "react-icons/md";
import styled from "styled-components";
import { Modal } from "..";
import styles from "../../../styles/styles";
import { Button, ReactIcon, Spacer, Typography } from "../../base";
import { Input } from "../../base";
import { BottomWrapper, ModalProps } from "../Modal";

export const StyledRow = styled(Row)`
  margin: ${styles.spacing[0]};
`;

export const StyledCol = styled(Col)`
  margin: ${styles.spacing[0]};
  padding: ${styles.spacing[0]}
`;

function RegisterModal(props: ModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    // todo: validate
    // do something with firstName, lastName, email, password, confirmPassword
  };

  return (
    <Modal {...props}>
      <Typography variant="h5">create an account</Typography>
      <Spacer height={24} />
      <Form onSubmit={handleSubmit}>
        <StyledRow>
          <StyledCol>
            <Input
              placeholder="first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </StyledCol>
          <Spacer width={8} />
          <StyledCol>
            <Input
              placeholder="last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Spacer height={8} />
          </StyledCol>
        </StyledRow>
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
        <Spacer height={8} />
        <Input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
