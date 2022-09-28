import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    });
    setTodoList(newTodoList);
  };
  return (
    <div className="App">
      <div className="addTask">
        <input type="text" value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList &&
          todoList.map((task) => {
            return (
              <div>
                <h1>{task.taskName}</h1>
                <button onClick={() => deleteTask(task.id)}>X</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
