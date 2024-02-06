import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import InputArea from "./InputArea";

function Main() {
  return (
    <MainWrapper>
      <InputArea></InputArea>
      <TodoList isActive={true}></TodoList>
      <TodoList isActive={false}></TodoList>
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default Main;
