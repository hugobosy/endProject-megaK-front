import React from 'react';
import './App.css';
import {Test} from 'types';
import {Home} from "../Home/Home";


function App() {

    const foo: Test = {
        x: 'hugo'
    }

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
