import logo from "assets/logo.svg";
import "./App.css";
import TestButton from "components/TestButton";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestButton>I am child :)</TestButton>
      </header>
    </div>
  );
};

export default App;
