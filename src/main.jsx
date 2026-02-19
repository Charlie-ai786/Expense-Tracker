import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ExpenseProvider } from "./context/ExpenseContext";
import { TaskProvider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExpenseProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ExpenseProvider>
  </React.StrictMode>
);
