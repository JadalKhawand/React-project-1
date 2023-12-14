import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

function Note({noteObj}) {

const noteStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '400px',
  padding: '20px',
  backgroundColor: 'aqua',
  borderRadius: '10px',
}

const profilePicStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  overflow: 'hidden',
}

const profileImg = {
  width: '50px',
}

  return (
  
      <div style={noteStyle}  className="note">

    <div style={profilePicStyle} className="profile-pic">
      <img style={profileImg} src={noteObj.author.profilePic} alt="" />
    </div>
    <div style={{display:'flex',flexDirection: 'column', gap: '20px', justifyContent: 'space-between', minHeight: '80px'}} className="name">
    <p>
      {noteObj.author.username}
    </p>
    <p>
    {noteObj.content}
    </p>
    </div>
    <div style={{display:'flex',flexDirection: 'column', gap: '20px', justifyContent: 'space-between', minHeight: '80px'}}>
    <p>
    <p><FontAwesomeIcon icon={faTrash} /></p>
    </p>
    <FontAwesomeIcon icon={faPenToSquare} />
    </div>
      

      </div>
    
  )
}

export default Note