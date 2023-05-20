import { useEffect, useState } from "react";
import "./Task_api.css";
const api = "https://dummyjson.com/todos";
const pagination = {
  limit: 5,
  skip: 0,
  total: null,
};

export function TASK_API() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = () => {
    const url = `${api}?limit=${pagination.limit}&skip=${pagination.skip}`;
    pagination.skip += pagination.limit;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.todos);
        setTodos([...todos, ...data.todos]);
      });
  };

  return (
    <>
      <h2>Task List</h2>
      <ul className="todos_list">
        {todos.map((t) => (
          <li key={t.id}>
            <input type="checkbox" name="status" checked={t.completed} />
            {t.id}. {t.todo}{" "}
          </li>
        ))}
      </ul>
      <button onClick={loadTasks}>loadTasks</button>
    </>
  );
}
