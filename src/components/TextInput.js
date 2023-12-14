import React from 'react';

function TextInput({ value, onChange }) {
  return (
    <input onChange={onChange} type="text" value={value} />
  );
}

export default TextInput;
