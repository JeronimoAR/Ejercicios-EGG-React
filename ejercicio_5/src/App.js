import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState('')
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ejercicio 5</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
        <p>Escribe tu nombre</p>
        <input value={firstName} name='firstname' onChange={e => setFirstName(e.target.value)} />
        <p>Your Name is: {firstName}</p>
      </header>
    </div>
  );
}

export default App;
