import styled from "styled-components";
import React from "react";

const Wrap = styled.div`
  border-bottom: 1px solid black;
  height: 100vh;
  background-image: url("https://as2.ftcdn.net/v2/jpg/03/99/44/77/1000_F_399447715_zDpkxhbi4oonBq8SLMBUEf7GZrwlrPDg.jpg");
  background-size: cover;
`;
function QnAPage() {
  return (
    <Wrap>
      <h1>QnA</h1>
    </Wrap>
  );
}

export default QnAPage;
