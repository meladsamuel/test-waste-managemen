import './App.css';
import React, { useState } from 'react';

function App() {
  const [msg, setMsg] = useState(null);
  function hiHandler() {
    setMsg((prevData) => `${prevData} hi`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{msg}</p>
        <p>welcome abdelrazek and mostafa :)</p>
        <p> test the deploy from other repo</p>
        <button type="button" onClick={hiHandler}>
          say
        </button>
      </header>
    </div>
  );
}

export default App;
