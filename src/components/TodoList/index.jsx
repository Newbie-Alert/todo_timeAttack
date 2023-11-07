import React from "react";
import styles from "./Todolist.module.css";
import TodoCard from "../TodoCard";

export default function Todolist({ isActive, todos, setTodos }) {
  const filtered = isActive
    ? todos.filter((el) => el.isDone === false)
    : todos.filter((el) => el.isDone === true);

  return (
    <div className={styles.todolist_container}>
      {isActive ? <h1>할 일 목록</h1> : <h1>완료 목록</h1>}
      <TodoCard
        filtered={filtered}
        todos={todos}
        setTodos={setTodos}
        isActive={isActive}
      />
    </div>
  );
}
