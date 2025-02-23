import React, { useEffect, useState } from "react";
import "./style.css"
import { Header } from "../../components/header/index.tsx"; 
import { Select } from "../../components/select/index.tsx";
import { ToDoList } from "../../components/toDoList/index.tsx";
import { FormModal } from "../../components/modal/index.tsx";
import { taskRequest } from "../../components/modal/taskRequest.ts";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const showTasks = async () => {
      const response = await taskRequest("fetchTasks");
      console.log(response)
    }
    showTasks()
  }, [])

  return <div className="main">
    <Header />
    <div className="genre">
      <Select />
      <AddCircleOutlineIcon 
        className="add_circle_outline_icon"
        font-size="default"
        onClick={handleOpen}
      />
      <FormModal
        handleClose={handleClose}
        isOpen={isOpen}
        body="genreBody"
      />
    </div>
    <div className="contents">
      <ToDoList />
    </div>
  </div>;
};