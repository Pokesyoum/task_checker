import React, { useEffect, useState } from "react";
import "./style.css"
import { Header } from "../../components/header/index.tsx"; 
import { Select } from "../../components/select/index.tsx";
import { ToDoList } from "../../components/toDoList/index.tsx";
import { FormModal } from "../../components/modal/index.tsx";
import { taskRequest } from "../../requests/taskRequest.ts";
import { genreRequest } from "../../requests/genreRequest.ts";
import { Data, dataAction, useDataReducer } from "../../hooks/useDataReducer.ts";
import { useFilterTasks } from "../../hooks/useFilterTasks.ts";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

type dataContextType = {
  data: Data;
  dispatch: ({ type, payload }: dataAction) => void;
}

export const DataContext = React.createContext<dataContextType>(
  {} as dataContextType
);

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, dispatch] = useDataReducer();
  const [selectGenreId, setSelectGenreId] = useState<number>(0)
  const [filteredTasks, tasksDispatch] = useFilterTasks();
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

  useEffect(() => {
    tasksDispatch({
      type: "filterTask",
      payload: { tasks: data.tasksData, genreId: selectGenreId },
    });
  }, [data.tasksData]);

  return (
  <DataContext.Provider value={{ data, dispatch }}>
    <div className="main">
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
        <ToDoList tasks={filteredTasks} />
      </div>
    </div>
  </DataContext.Provider>
  );
};