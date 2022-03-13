import React from "react";
import { Form } from "react-bootstrap";
import { MdMail, MdPassword } from "react-icons/md";
import { Modal } from "..";
import { Button, Spacer, Typography } from "../../base";
import { Input } from "../../base";
import { useForm } from "../../../utils";
import { ModalProps } from "../Modal";
import { loginUser } from "../../../api";

function LoginModal(props: ModalProps) {
  const handleSubmit = async () => {
    try {
      await loginUser({
        email,
        password,
      });
    } catch (e) {
      setErrors(["Something went wrong"]);
    }
    props.setShow(false);
  };

  const {
    onChange,
    onSubmit,
    values: { email, password },
    setErrors,
  } = useForm(handleSubmit, {
    email: "",
    lastname: "",
  });

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
      <Form onSubmit={onSubmit}>
        <Input
          name="email"
          value={email}
          onChange={onChange}
          icon={MdMail}
          placeholder="email"
        />
        <Spacer height={8} />
        <Input
          name="password"
          value={password}
          onChange={onChange}
          icon={MdPassword}
          placeholder="password"
        />
      </Form>
    </Modal>
  );
}

export default LoginModal;
