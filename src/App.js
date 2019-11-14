import React from 'react';
import './App.css';
import CountdownClock from './CountdownClock';

const App = () => {
  const timeFormat = (time) => {
    return `you have ${time}s left`;
  };
  return (
    <div className="App">
      <CountdownClock 
        seconds={10} 
        onFinish={()=>alert("finish")}
        timeFormat={timeFormat} />
    </div>
  );
}

export default App;
