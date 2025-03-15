import React, { useState } from "react";
import { Task } from "../task/index.tsx";
import { FormModal } from "../modal/index.tsx";
import { TaskType } from "../../interfaces/TaskType.ts";
import MenuIcon from "@mui/icons-material/Menu"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./style.css";

interface Props {
  tasks: TaskType[];
}

export const ToDoList = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
      setIsOpen(true);
    };
    const handleClose = () => {
      setIsOpen(false);
  };
  return (
    <div className="task_list">
      <div className="section">
        <MenuIcon className="section_ele" />
        <span className="section_ele">ToDo</span>
        <AddCircleOutlineIcon
          className="add_circle_outline_icon"
          fontSize="small"
          onClick={handleOpen}
        />
        <FormModal
          handleClose={handleClose}
          isOpen={isOpen}
          body="taskBody"
        />
      </div>
      <div className="task_field">
        {props.tasks.map((task: TaskType) => {
            return <Task task={task} key={task.id} />;
        })}
      </div>
    </div>
  );
};