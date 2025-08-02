import React, { useState } from "react";

export default function Sudoku() {

    
  const create2DArray = (rows, columns, initializer) => {
    let arr = new Array(rows);
    for (let i = 0; i < rows; i++){
        arr[i] = new Array(columns);
        for (let j = 0; j < columns; j++){
            arr[i][j] = initializer;
        }
    }

    return arr;
  }

  const [grid, setGrid] = useState(() => create2DArray(9, 9, 0));

 
  return (
    <div className="sudoku">
      {grid && 
        grid.map(() => {
            <p>Hi</p>
        })
      }
    </div>
  );
}
