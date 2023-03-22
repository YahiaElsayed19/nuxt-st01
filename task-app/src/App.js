import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import axios from 'axios'
function App() {
  useEffect(() => {
    async function name() {
      let response = await axios.get("http://localhost:4000/todos", {
        auth: {
          username: 'zucker',
          password: '123456'
        }
      })
      console.log(response);
    }
    name()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
