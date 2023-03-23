import React, { useState, useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css';



function App() {
  const [text, setText] = useState('');

  const textInConsole = useCallback(() => {
    // console.log(text);
    console.log(document.getElementsByClassName('ql-editor')[0].innerText)
  }, []);

  const EditorToolbar = () => (
    <div id="toolbar">
      <button onClick={textInConsole}>
        Save
      </button>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The editor
        </p>
      </header>
      <EditorToolbar/>
      <ReactQuill theme="snow" value={text} onChange={(value) => setText(value)} />
    </div>
  );
}

export default App;
