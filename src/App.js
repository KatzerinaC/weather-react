
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <>
     <div className="weather-app-wrapper">
      <div className="App">
        <Weather />
      </div>
      <small>
        <a
          href="https://github.com/KatzerinaC/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Katerina Carreno{" "}
      </small>
        </div>
    </>
  );
}

export default App;
