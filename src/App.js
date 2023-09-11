import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CounselingPage from "./MainPage/CounselingPage";
import CalendarPage from "./MainPage/CalendarPage";
import HobbyList from "./MainPage/HobbyList";
import QnAPage from "./MainPage/QnAPage";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header/HeaderBox";

const Wrap = styled.div``;

const Page = styled.div``;
const Footer = styled.div`
  background-color: aliceblue;
  height: 200px;
`;
function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <Header />
      <Page>
        <CounselingPage />
        <CalendarPage />
        <HobbyList />
        <QnAPage />
      </Page>
      <Footer>
        <h1>footer</h1>
      </Footer>
    </Wrap>
  );
}

export default App;
