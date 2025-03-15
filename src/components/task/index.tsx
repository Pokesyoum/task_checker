import React from "react";
import { Select } from "../select/index.tsx";
import { TaskType } from "../../interfaces/TaskType.ts";
import "./style.css";

interface Props {
  task: TaskType
}

export const Task = (props: Props) => {
  return (
    <div className="task" style={{ backgroundColor: "white" }}>
      <span className="task_date">{props.task.deadlineDate}</span>
      <div className="task_text_contents">
        <h3 className="task_title">{props.task.name}</h3>
        <p className="task_sentence">{props.task.explanation}</p>
      </div>
      <div className="task_input_contents">
        <Select />
      </div>
    </div>
  );
};