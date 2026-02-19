import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [xp, setXp] = useState(0);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];

    if (!updatedTasks[index].completed) {
      updatedTasks[index].completed = true;
      setXp((prev) => prev + 20); // give 20 XP per task
    }

    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, xp }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
