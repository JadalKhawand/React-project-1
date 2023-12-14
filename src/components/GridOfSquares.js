import React from "react";
import Square from "./square"



function GridOfSquares({gridSize}){
// generate 25 elements
let squareSize = 25 // every sqaure will be of 40 px on heigh and width


let itemsArr = []
 itemsArr = Array(gridSize * gridSize).fill(null)


let gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  width: `${gridSize * squareSize}px`,
  height: `${gridSize * squareSize}px`,
}

  return (
    <>
    
    <div style={gridStyle} className="squares-grid">
    {itemsArr.map(function(element){
      return <Square size={squareSize}/>
    })}
    </div>
    </>
    )
}
export default GridOfSquares;