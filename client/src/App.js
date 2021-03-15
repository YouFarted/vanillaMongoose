import logo from './logo.svg';
import './App.css';
import AllUsers from './components/AllUsers';

function App() {
  return (
    <div className="App">
      <AllUsers/>
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
          Learn Reactx
        </a>
      </header>
    </div>
  );
}

export default App;
