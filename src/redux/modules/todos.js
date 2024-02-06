// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

const initialState = [
  {
    id: shortid.generate(),
    title: "",
    body: "",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodoItem = action.payload;
      return [...state, newTodoItem]; //TODO: 여기 작성

    case "DELETE_TODO":
      const deleteTargetId = action.payload;
      const deleteFilteredList = state.filter((todo) => {
        return todo.id !== deleteTargetId;
      });
      return deleteFilteredList; //TODO: 여기 작성

    case "SWITCH_TODO":
      const switchTargetId = action.payload;
      const switchFilteredList = state.map((todo) => {
        if (todo.id === switchTargetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      });
      return switchFilteredList;

    default:
      return state;
  }
};

export default todos;
