import { useState } from 'react';
// import './App.css';
import GridOfSquares from './components/GridOfSquares';
import Note from './components/Note';
import NoteList from './components/NoteList';
import Form from './components/Form';
import Carousel from './components/Carousel';

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
const slides = [
  {url: "./1.jpg", title: '1'},
  {url: "./2.jpg", title: '2'},
  {url: "./3.jpg", title: '3'},
  {url: "./4.jpeg", title: '4'},
  {url: "./5.jpeg", title: '5'},
]

const containerStyles = {
  width: "500px",
  height: "280px",
  margin: "0 auto"
}

  return (
    <div>
      <div style={containerStyles}>
      <Carousel slides = {slides}/>
      </div>
    </div>
  );
}

export default App;
