import React, { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";
import styled from "styled-components";
import { ReactIcon } from "..";
import styles from "../../../styles/styles";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  icon?: IconType;
  area?: boolean;
  description?: string;
}

type TextAreaProps = ComponentPropsWithoutRef<"textarea">;

const StyledInput = styled.input<InputProps>`
  font-family: inherit;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  padding-left: ${({ icon }) => (icon ? styles.spacing[4] : null)};
  font-size: 14px;
  line-height: 1.5;
  background-clip: padding-box;
  border: 0.5px solid ${styles.colors.concrete};
  color: ${styles.colors.text.secondary};

  :focus {
    outline: none;
    border: 0.5px solid ${styles.colors.text.secondary};
    color: ${styles.colors.text.accent};
  }
`;

const StyledTextArea = styled.textarea<TextAreaProps>`
  font-family: inherit;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 14px;
  line-height: 1.5;
  background-clip: padding-box;
  border: 0.5px solid ${styles.colors.concrete};
  color: ${styles.colors.text.secondary};

  :focus {
    outline: none;
    border: 0.5px solid ${styles.colors.text.secondary};
    color: ${styles.colors.text.accent};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0.75rem;
  color: ${styles.colors.text.secondary};
  display: flex;
  height: 100%;
  align-items: center;
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
          <IconWrapper>{ReactIcon(props.icon, 14, "inherit")}</IconWrapper>
          <StyledInput {...props} />
        </InputWrapper>
      ) : (
        <StyledInput {...props} />
      )}
    </>
  );
}

export default Input;
