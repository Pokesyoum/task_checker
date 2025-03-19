import React, { useContext } from "react";
import { DataContext } from "../../pages/home/index.tsx";
import { GenreType } from "../../interfaces/GenreType";
import CancelIcon from "@mui/icons-material/Cancel";
import "./style.css";

export const GenreBody = () => {
  const { data } = useContext(DataContext);
  return (
    <div className="modal_body">
      <h2 className="input_menu">ジャンル編集</h2>
      <ul>
        {data.genresData.map((genre: GenreType) => {
          return (
            <li className="genre_title" key={genre.id}>
              <span>{genre.name}</span>
              <CancelIcon />
            </li>
          );
        })}
      </ul>
      <input type="text" />
      <input className="input_submit" type="button" value="追加" />
    </div>
  );
};