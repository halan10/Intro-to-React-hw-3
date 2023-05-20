import "./Task.css";
export function Task(props) {
  return (
    <div className="Task">
      <input type="checkbox" name="status" checked={props.completed} />
      <span>{props.id}. </span>
      <span>{props.todo} </span>
    </div>
  );
}
