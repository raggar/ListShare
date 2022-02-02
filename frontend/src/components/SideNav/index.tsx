import React from "react";
import Button from "../base/Button";
import styled from "styled-components";
import styles from "../../styles/styles";
import DropCircle from "../base/DropCircle";

interface ButtonProps {
  isLoggedIn?: boolean;
}

const StyledContainer = styled.div<ButtonProps>`
  background-color: ${styles.colors.background};
  padding: ${styles.spacing.sm};
  width: 300px;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
`;

function SideNav() {
  return (
    <StyledContainer>
      <Button primary className="mb-3">
        click me
      </Button>
      <DropCircle title="never gonna give you up">
        We are no strangers to love You know the rules and so do I A full
        commitment is what I am thinking of You wouldn not get this from any
        other guy
      </DropCircle>
      <DropCircle title="never gonna">let you down</DropCircle>
      <DropCircle title="turn around and desert you" last>
        hello
      </DropCircle>
    </StyledContainer>
  );
}

export default SideNav;
