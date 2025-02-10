import React from "react";
import "./style.css"
import { Header } from "../../components/header/index.tsx"; 
import { Select } from "../../components/select/index.tsx";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const Home = () => {
  return <div className="main">
    <Header />
    <div className="genre">
      <Select />
      <AddCircleOutlineIcon 
        className="add_circle_outline_icon"
        font-size="medium"
      />
    </div>
  </div>;
};