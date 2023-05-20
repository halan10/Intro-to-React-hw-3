import { Task } from "./Task";
import { useState } from "react";

export function TaskList(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const sort_by_name = () => {
    tasks.sort((a, b) => (a.todo > b.todo ? 1 : -1));
    setTasks([...tasks]);
  };

  return (
    <>
      <h2>Your records:</h2>
      <div>
        {props.tasks.map((t) => (
          <Task key={t.id} {...t} />
        ))}
      </div>
      <button onClick={sort_by_name}>Sort</button>
    </>
  );
}
