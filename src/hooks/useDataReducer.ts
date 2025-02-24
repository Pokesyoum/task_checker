import { useReducer } from "react";
import { TaskType } from "../interfaces/TaskType";
import { GenreType } from "../interfaces/GenreType";

export type dataAction = {
  type: "tasksUpdate" | "genresUpdate";
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
        state.tasksData = [{
          id: 1,
          name: "タスクA",
          explanation: "テストのタスクです",
          deadlineData: "",
          status: 1,
          genreId: 1
        }]
        return state;
      case "genresUpdate":
        state.genresData = [{
          id: 1,
          name: "ジャンルA"
        }]
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, initialData)
  return [data, dispatch]
};