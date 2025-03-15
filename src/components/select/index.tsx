import React from "react";
import "./style.css"
import { GenreType } from "../../interfaces/GenreType";

interface Props {
  genres?: GenreType[];
}

const renderOption = (props: Props) => {
  return (
    props.genres &&
    props.genres.map((genre: GenreType) => (
      <option key={genre.id} value={genre.id}>
        {genre.name}
      </option>
    ))
  );
};

export const Select = (props: Props) => {
  return (
    <div>
      <select className="select">
        {!props.genres && <option value={0}></option>}
        {renderOption(props)}
      </select>
    </div>
  );
};