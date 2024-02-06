import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

function TodoList({ isActive }) {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const filteredList = todos.filter((todo) => {
    return todo.isDone !== isActive;
  });
  return (
    <TodoListWrapper>
      <h1>{isActive === true ? "DOING" : "DONE"}</h1>
      <TodoContainer>
        {filteredList.map((todo) => {
          return (
            <Todo key={todo.id}>
              <p>제목:{todo.title}</p>
              <p>내용:{todo.body}</p>
              <ButtonWrapper>
                <button onClick={() => dispatch(switchTodo(todo.id))}>
                  {todo.isDone === false ? "완료" : "취소"}
                </button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  삭제
                </button>
                <button onClick={() => navigate(`/${todo.id}`)}>
                  상세보기
                </button>
              </ButtonWrapper>
            </Todo>
          );
        })}
      </TodoContainer>
    </TodoListWrapper>
  );
}

const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const TodoContainer = styled.div`
  width: 100%;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;

  border-radius: 5px;
`;
const Todo = styled.div`
  margin-right: 5px;
  width: 180px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 3px solid gray;
  border-radius: 8px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export default TodoList;
