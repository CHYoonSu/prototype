import styled from "styled-components";
import React from "react";

const Wrap = styled.div`
  flex-grow: 1;
`;
const LogoBox = styled.div`
  font-size: 30px;
`;
function Logo() {
  return (
    <Wrap>
      <LogoBox>하비드림</LogoBox>
    </Wrap>
  );
}

export default Logo;
