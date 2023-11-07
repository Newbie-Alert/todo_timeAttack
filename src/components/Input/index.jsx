import React, { useState } from "react";
import styles from "./Input.module.css";
import uuid from "react-uuid";

export default function Input({ setTodos }) {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleTask = (e) => setTask(e.target.value);

  const makeList = (e, title, task) => {
    e.preventDefault();
    let todo = { id: uuid(), title, task, isDone: false };
    setTodos((prev) => [...prev, todo]);
  };

  return (
    <div className={styles.input_container}>
      <form
        className={styles.input_title_box}
        onSubmit={(e) => {
          makeList(e, title, task);
          setTitle("");
        }}>
        <label htmlFor="title_input">제목:</label>
        <input
          onChange={handleTitle}
          type="text"
          required
          id="title_input"
          placeholder="제목을 입력하세요"
        />
      </form>
      <form
        className={styles.input_task_box}
        onSubmit={(e) => {
          makeList(e, title, task);
          setTask("");
        }}>
        <label htmlFor="task_input">내용:</label>
        <input
          onChange={handleTask}
          type="text"
          required
          id="task_input"
          placeholder="내용을 입력하세요"
        />
        <button>등록하기</button>
      </form>
    </div>
  );
}
