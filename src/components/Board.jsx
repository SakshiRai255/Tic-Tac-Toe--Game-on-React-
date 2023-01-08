import React from "react";
import Box from "./Box";
import "./Board.css";

function Board({ board, onClick }) {
  return (
    <div className="Board">
      
      {board.map((value, index) => {
        return <Box value={value} onClick={() =>value === null && onClick(index)} />;
      })}

    </div>
  );
}

export default Board;
