import styled from "styled-components";
import React from "react";

const Wrap = styled.div`
  border-bottom: 1px solid black;
  height: 100vh;
  background-image: url("https://as1.ftcdn.net/v2/jpg/00/71/61/90/1000_F_71619031_Dun0XJhtmYa1reAYzxI0FfgMpSfkJQWM.jpg");
  background-size: cover;
`;
function CalendarPage() {
  return (
    <Wrap>
      <h1>계획쓰</h1>
    </Wrap>
  );
}

export default CalendarPage;
