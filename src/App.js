import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  function textInConsole(){
    console.log("text is comming here")
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The editor
        </p>
        <button onClick={textInConsole}>
          Save
        </button>
      </header>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
}

export default App;
