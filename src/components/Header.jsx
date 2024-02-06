import React from "react";
import styled from "styled-components";

function Header() {
  return <Title>To Do List</Title>;
}
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  height: 120px;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
`;
export default Header;
