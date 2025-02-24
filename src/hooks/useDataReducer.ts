import { useReducer } from "react";
import { TaskType } from "../interfaces/TaskType";
import { GenreType } from "../interfaces/GenreType";

export type dataAction = {
  type: "tasksUpdate" | "genresUpdate";
  payload: { task?: TaskType[]; genre?: GenreType[] };
};

export type Data = {
  tasksData: TaskType[];
  genresData: GenreType[];
}

export const useDataReducer = (): any => {
  const initialData = {
    tasksData: [],
    genresData: []
  }

  const reducer = (state: Data, action: dataAction) => {
    switch (action.type) {
      case "tasksUpdate":
        return { ...state, tasksData: action.payload.task || state.tasksData };
      case "genresUpdate":
        return { ...state, genresData: action.payload.genre || state.genresData};
    }
  };

  const [data, dispatch] = useReducer(reducer, initialData)
  return [data, dispatch]
};