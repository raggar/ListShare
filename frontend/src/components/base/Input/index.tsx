import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import styles from "../../../styles/styles";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  icon?;
  area?: boolean;
  description?: string;
}

type TextAreaProps = ComponentPropsWithoutRef<"textarea">;

const StyledInput = styled.input<InputProps>`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  padding-left: ${({ icon }) => (icon ? styles.spacing[5] : null)};
  font-size: 1rem;
  line-height: 1.5;
  background-clip: padding-box;
  border: 0.5px solid ${styles.colors.text.secondary};

  :focus {
    outline: none;
    border: 1px solid ${styles.colors.text.accent};
  }
`;

const StyledTextArea = styled.textarea<TextAreaProps>`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-clip: padding-box;
  border: 0.5px solid ${styles.colors.text.secondary};

  :focus {
    outline: none;
    border: 1px solid ${styles.colors.text.accent};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0.375rem;
  left: 0.75rem;
`;

const InputWrapper = styled.div`
  padding: ${styles.spacing[0]};
  margin: ${styles.spacing[0]};
  position: relative;
`;

function Input(props: InputProps) {
  if (props.area) {
    return <StyledTextArea placeholder={props.placeholder} />;
  }
  return (
    <>
      {props.icon ? (
        <InputWrapper>
          <IconWrapper>{props.icon}</IconWrapper>
          <StyledInput {...props} />
        </InputWrapper>
      ) : (
        <StyledInput {...props} />
      )}
    </>
  );
}

export default Input;
