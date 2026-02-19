import { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskSection = () => {
  const { tasks, addTask, toggleTask } = useTasks();
  const [taskTitle, setTaskTitle] = useState("");

  const handleAdd = () => {
    if (!taskTitle) return;
    addTask({ title: taskTitle });
    setTaskTitle("");
  };

  return (
    <div className="bg-[#131a2b] p-6 rounded-2xl border border-white/10 space-y-4">
      <h2 className="text-xl font-semibold">Tasks 🎯</h2>

      <div className="flex gap-2">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 p-3 rounded-lg bg-white/10 outline-none"
        />
        <button
          onClick={handleAdd}
          className="bg-purple-600 px-4 rounded-lg"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
              className="w-5 h-5 accent-purple-500"
            />
            <span
              className={`${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
