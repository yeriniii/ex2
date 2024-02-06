import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import shortid from "shortid";
import styled from "styled-components";

const InputArea = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onsubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        id: shortid(),
        title: title,
        body: content,
        isDone: false,
      })
    );
  };
  return (
    <InputForm onSubmit={onsubmitHandler}>
      제목:{" "}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      내용:{" "}
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">제출</button>
    </InputForm>
  );
};
const InputForm = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  button {
    margin-left: 10px;
    border: none;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      background-color: tomato;
    }
  }
`;
export default InputArea;
