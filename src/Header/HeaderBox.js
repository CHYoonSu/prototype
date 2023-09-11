import styled from "styled-components";
import React from "react";
import Logo from "./Logo";
import Login from "./Login";

const Header = styled.div`
  height: 100px;
  width: 100%;
  position: fixed;
  z-index: 1;
  background-color: white;
  display: flex;
`;

const MenwBar = styled.div`
  flex-grow: 3;
  background-color: green;
`;
function HeaderBox() {
  return (
    <Header>
      <Logo />
      <MenwBar />
      <Login />
    </Header>
  );
}

export default HeaderBox;
