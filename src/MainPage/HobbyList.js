import styled from "styled-components";
import React from "react";

const Wrap = styled.div`
  border-bottom: 1px solid black;
  height: 100vh;
  background-image: url("https://t3.ftcdn.net/jpg/02/89/76/50/240_F_289765077_0Y6zzBeUJBP86pLiGr3VeKVn4mfqnwfd.jpg");
  background-size: cover;
`;
function HobbyList() {
  return (
    <Wrap>
      <h1>취미추천</h1>
    </Wrap>
  );
}

export default HobbyList;
