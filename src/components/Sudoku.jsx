import React, { useState } from "react";

export default function Sudoku() {
  const create2DArray = (rows, columns, initializer) => {
    let arr = new Array(rows);
    let innerInit = initializer
    for (let i = 0; i < rows; i++) {
        innerInit = initializer
      arr[i] = new Array(columns);
      for (let j = 0; j < columns; j++) {
        arr[i][j] = innerInit++;
      }
    }

    return arr;
  };

  const setYourOwnSudoku = () => {
    setGrid(
        [
            [null,7,6,null,null,null,null,null,null],
            [null,null,null,6,8,9,7,1,3],
            [8,9,null,2,null,null,null,null,null],
            [null,2,1,8,7,3,9,4,null],
            [7,null,null,null,6,null,1,null,8 ],
            [9,null,null,null,4,null,null,null,null],
            [4,1,9,3,null,null,5,null,7],
            [null,8,5,null,9,6,4,3,1],
            [null,6,null,4,5,1,null,null,9],
        ]
    )
  }
  const [grid, setGrid] = useState(() => create2DArray(9, 9, 1));

  return ( <>
    <div className="sudoku-container">
      <table className="sudoku-table">
        <tbody>
          {grid &&
            grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className={`cell
                     ${
                       colIndex % 3 === 2
                         ? "cell-border-right"
                         : ""
                     }
                     ${
                       rowIndex % 3 === 2
                         ? "cell-border-bottom"
                         : ""
                     }
                     ${colIndex === 0 ? "cell-border-left" : ""}
                     ${rowIndex === 0 ? "cell-border-top" : ""}  
                    `}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>

    <div>
        <button onClick={setYourOwnSudoku}>Your Own Sudoku</button>
    </div>
    </>
  );
}
