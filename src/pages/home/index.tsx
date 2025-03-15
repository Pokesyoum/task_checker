import React, { useEffect, useState } from "react";
import "./style.css"
import { Header } from "../../components/header/index.tsx"; 
import { Select } from "../../components/select/index.tsx";
import { ToDoList } from "../../components/toDoList/index.tsx";
import { FormModal } from "../../components/modal/index.tsx";
import { taskRequest } from "../../requests/taskRequest.ts";
import { genreRequest } from "../../requests/genreRequest.ts";
import { useDataReducer } from "../../hooks/useDataReducer.ts";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, dispatch] = useDataReducer();
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const genres = await genreRequest("fetchGenres");
      const tasks = await taskRequest("fetchTasks");
      dispatch({ type: "genresUpdate", payload: { genre: genres } });
      dispatch({ type: "tasksUpdate", payload: { task: tasks } });
    };
    fetchData();
  }, []);

  return <div className="main">
    <Header />
    <div className="genre">
      <Select genres={data.genresData} />
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
      <ToDoList tasks={data.tasksData} />
    </div>
  </div>;
};