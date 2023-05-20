import "./App.css";
import { Counter } from "./components/Counter";
import { TaskList } from "./components/TaskList";
import { TASKS } from "./components/tasks";
import { TASK_API } from "./components/TASK_API";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="tasks_api" element={<TASK_API />} />
          <Route path="tasks" element={<TaskList tasks={TASKS} />} />
          <Route path="counter" element={<Counter />} />
          <Route path="*" element={<h1>Page Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
