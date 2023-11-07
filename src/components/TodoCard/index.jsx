import React from "react";
import styles from "./TodoCard.module.css";

export default function TodoCard({ isActive, filtered, todos, setTodos }) {
  const data = filtered;

  const findDoneTarget = (e) => {
    let targetId = e.target.dataset.id;
    makeDone(targetId);
  };
  const findCancleTarget = (e) => {
    let targetId = e.target.dataset.id;
    candleTodo(targetId);
  };
  const findRemoveTarget = (e) => {
    let targetId = e.target.dataset.id;
    removeTodo(targetId);
  };

  const makeDone = (targetId) => {
    let copy = [...todos];
    let found = copy.find((el) => el.id === targetId);
    found.isDone = true;
    setTodos(copy);
  };

  const candleTodo = (targetId) => {
    let copy = [...todos];
    let found = copy.find((el) => el.id === targetId);
    found.isDone = false;
    setTodos(copy);
  };

  const removeTodo = (targetId) => {
    let copy = todos.filter((el) => el.id !== targetId);
    setTodos(copy);
  };

  return (
    <>
      {data.map((el) => {
        return (
          <div className={styles.todo_card} key={el.id}>
            <div className={styles.todo_contents}>
              <span>제목</span>
              <h2>{el.title}</h2>
              <span>내용</span>
              <h4>{el.task}</h4>
              <p>{el.isDone}</p>
            </div>
            <div className={styles.button_box}>
              {isActive ? (
                <button data-id={el.id} onClick={findDoneTarget}>
                  완료
                </button>
              ) : (
                <button data-id={el.id} onClick={findCancleTarget}>
                  취소
                </button>
              )}
              <button data-id={el.id} onClick={findRemoveTarget}>
                삭제
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
