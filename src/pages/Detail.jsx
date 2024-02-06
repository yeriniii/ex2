import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo } from "../redux/modules/todos";

const Detail = () => {
  const todos = useSelector((state) => state.todos);
  const param = useParams();
  const id = param.id;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filteredDetail = todos.find((todo) => {
    return todo.id === id;
  });
  console.log(filteredDetail);
  const deleteHandler = () => {
    const isDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (!isDelete) return;
    navigate(`/`);
    dispatch(deleteTodo(id));
  };
  return (
    <DetailWrapper>
      <button onClick={() => navigate(`/`)}>뒤로가기</button>
      <p>제목: {filteredDetail.title}</p>
      <p>내용: {filteredDetail.body}</p>
      <p>완료여부: {filteredDetail.isDone === true ? "완료" : "진행중"}</p>
      <button onClick={deleteHandler}>삭제</button>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 50%;
  align-items: center;
  border: 1px solid gray;
`;
export default Detail;
