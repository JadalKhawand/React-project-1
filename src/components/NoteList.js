import React from 'react'
import Note from './Note'

function NoteList({notes}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
    {notes.map(function(note){
      return <Note noteObj={note}/>
    })}
    </div>
  )
}

export default NoteList