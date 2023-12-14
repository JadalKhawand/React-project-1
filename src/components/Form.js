import React, { useState } from 'react';

// Renamed to TextInput and added label prop
function TextInput({ label, onChange, value }) {
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input
        id={label}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function Form() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('');
  

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleLastnameChange(event){
    setLastname(event.target.value)
  }

  function submitForm() {
    alert(`You submitted ${name} and ${lastname}`);
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* Pass label prop to identify the input */}
      <TextInput label='Name:' onChange={handleNameChange} value={name} />
      {/* Pass label prop to identify the input */}
      <TextInput label='Lastname:' onChange={handleLastnameChange} value={lastname} />
      <TextInput label='Password:' onChange={handleEmailChange} value={Password} />
      <TextInput label='Confirm Password:' onChange={handleEmailChange} value={Password} />
      <TextInput label='Mobile:' onChange={handleEmailChange} value={Mobile} />

      <button onClick={submitForm} type='button'>Submit</button>
    </form>
  );
}

export default Form;
