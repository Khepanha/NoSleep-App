import './App.css';
import { useState } from 'react';
import NoSleep from 'nosleep.js';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('Enable NoSleep Mode');
  const noSleep = new NoSleep();

  const handleClick = () => {
    setIsActive(!isActive);
    console.log(isActive)
    isActive ? setText('Enable NoSleep Mode') : setText('Disable NoSleep Mode');
    isActive ? noSleep.disable() : noSleep.enable();
    alert(text);
  }

  return (
    <div className="App"
      style={{
        color: isActive ? 'red' : 'black',
      }}
    >
      <h1>NoSleep Test</h1>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>NoSleep Test</h1>
//     </div>
//   );
// }

// export default App;
