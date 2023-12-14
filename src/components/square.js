import React, { useState } from "react"

function Square({size}) {
  const [clicked , setClicked] = useState(false)
  const [counter, setCounter] = useState(0)

const squareStyle = {
  backgroundColor: clicked ? 'red' : 'gray',
  height: (size) + 'px',
  width: (size) + 'px',
  display: 'flex',
  justifyContent : 'center',
  alignItems:'center',
  userSelect: 'none',
  border: '1px solid black',
}
function handleClick(){
  setClicked(!clicked);
  setCounter(counter + 1);
}


  return (
    <div onClick={handleClick} className="square" style={squareStyle}>
      <span>
        {counter}
      </span>
    </div>
  );
}

export default Square;
