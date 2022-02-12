import React from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";

const HeaderImage = styled(Image)`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;

export const HeaderCover = () => {
  return (
    <HeaderImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
  );
};
