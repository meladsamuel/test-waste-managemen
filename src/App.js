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
        <p>update from the server</p>
        <p>hi</p>
        <p>welcome abdelrazek and mostafa :2</p>
        <p> test the deploy from other repo 2</p>
        <button type="button" onClick={hiHandler}>
          say
        </button>
      </header>
    </div>
  );
}

export default App;
