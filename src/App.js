import { useState } from 'react';
import './App.css';
import GridOfSquares from './components/GridOfSquares';
import Note from './components/Note';
import NoteList from './components/NoteList';
import Form from './components/Form';

function App(props) {
  const [gridSize, setGridSize] = useState(1)
function handleIncrement(){
  setGridSize(gridSize+1)
}
function handledecrement(){
  setGridSize(gridSize-1)
}
const notes= [
  {
    author:{ username: 'jad',
     profilePic: './coffee.jpeg',
   },
   content: "this is a note"
   
   },

  {
    author:{ username: 'jad',
     profilePic: './coffee.jpeg',
   },
   content: "this is a note"
   
   },

  {
    author:{ username: 'jad',
     profilePic: './coffee.jpeg',
   },
   content: "this is a note"
   
   },

]




  return (
    <Form />
  );
}

export default App;
