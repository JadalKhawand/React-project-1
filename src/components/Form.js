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
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleLastnameChange(event){
    setLastname(event.target.value)
  }
  function handlePasswordChange(event){
    setPassword(event.target.value)
  }
  function handleConfirmPasswordChange(event){
    setConfirmPassword(event.target.value)
  }

  function submitForm() {
    alert(`Welcome ${name} ${lastname}`);
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* Pass label prop to identify the input */}
      <TextInput label='Name ' onChange={handleNameChange} value={name} />
      {/* Pass label prop to identify the input */}
      <TextInput label='Lastname ' onChange={handleLastnameChange} value={lastname} />
      <TextInput label='Password ' onChange={handlePasswordChange} value={password} />
      <TextInput label='Confirm Password ' onChange={handleConfirmPasswordChange} value={confirmPassword} />

      <button style={{width: '80px', textAlign: 'center'}} onClick={submitForm} type='button'>Submit</button>
    </form>
  );
}

export default Form;
