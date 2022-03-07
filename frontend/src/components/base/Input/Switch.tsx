import React, { ComponentPropsWithoutRef, useState } from "react";
import styled from "styled-components";
import { Layout, Spacer } from "..";
import styles from "../../../styles/styles";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  onLabel?: JSX.Element;
  offLabel?: JSX.Element;
  toggleAction?: () => void;
}

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: ${styles.spacing[4]};
  height: ${styles.spacing[2]};

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + .slider {
    background-color: ${styles.colors.dark};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(${styles.spacing[2]});
    -ms-transform: translateX(${styles.spacing[2]});
    transform: translateX(${styles.spacing[2]});
  }
`;

const StyledSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${styles.colors.concrete};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: ${styles.spacing[2]};

  :before {
    position: absolute;
    content: "";
    height: ${styles.spacing[1]};
    width: ${styles.spacing[1]};
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

function Switch(props: InputProps) {
  const [isChecked, setChecked] = useState(props.checked);

  const handleClick = () => {
    if (props.toggleAction) props.toggleAction;
    setChecked(!isChecked);
  };

  return (
    <>
      <Layout>
        {isChecked ? props.onLabel : props.offLabel}
        <Spacer width={8}/>
        <StyledSwitch>
          <input type="checkbox" checked={isChecked} onChange={handleClick} />
          <StyledSlider className="slider" />
        </StyledSwitch>
      </Layout>
    </>
  );
}

export default Switch;
