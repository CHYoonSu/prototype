import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  border-bottom: 1px solid black;
  height: 100vh;
  background-image: url("https://t3.ftcdn.net/jpg/02/76/21/14/240_F_276211407_iQ03ryBski67G5bV26rZUx8QXHIRem0C.jpg");
  background-size: cover;
`;
const TitleBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;

const ContentBox = styled.div``;

const ConsultBtn = styled.button``;
function CounselingPage() {
  return (
    <Wrap>
      <h1>상담쓰</h1>
    </Wrap>
  );
}

export default CounselingPage;
