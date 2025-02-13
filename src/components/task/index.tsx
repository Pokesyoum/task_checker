import React from "react";
import { Select } from "../select/index.tsx";
import "./style.css";

export const Task = () => {
  return (
    <div className="task" style={{ backgroundColor: "white" }}>
      <span className="task_date">2025-02-12</span>
      <div className="task_text_contents">
        <h3 className="task_title">タスク名</h3>
        <p className="task_sentence">タスクの説明</p>
      </div>
      <div className="task_input_contents">
        <Select />
      </div>
    </div>
  );
};