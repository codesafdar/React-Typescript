import React, { useState } from 'react';
import './App.css';
import Index from './header/Index';
import Input from './components/Input';

function App() {
  const [addTask, setAddTask] = useState(false)

  return (
    <div className="App">
      <Index textColor={'yellowgreen'} textData={'Task Tracker'} />
      <Input />
    </div>
  );
}

export default App;
