// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(event.target.elements.usernameInput.value);
  }

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput"/>
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}



export default App;

/* Extra Credit 

  01
    const inputRef = React.useRef("");
    onSubmitUsername(inputRef.current.value);
    <input type="text" id="usernameInput" ref={inputRef} />   

  02 

  const [error, setError] = React.useState('');


  function handleChange(event) {
    const inputValue = event.target.value;
    setError(
      inputValue === inputValue.toLowerCase()
        ? null
        : 'Username must be lowercase',
    );
  }
  <input type="text" id="usernameInput" onChange={handleChange} />
    <button type="submit" disabled={error ? true : false}>
        Submit
    </button>
    {error ? <p role="alert" style={{color: 'red', marginTop: '0px'}}>{error}</p> : null}
  
  
  03


  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(username);
  }

  function handleChange(event) {
    const inputValue = event.target.value
    setUsername(inputValue.toLowerCase())
  }
  
  <input type="text" id="usernameInput" onChange={handleChange} value={username}/>
*/