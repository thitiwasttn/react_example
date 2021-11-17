import logo from './logo.svg';
import './App.css';
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Post from "./components/Post";
import State from "./components/State";
import PropFunction from "./components/PropFunction";
import PropFunctionParent from "./components/propfunction/PropFunctionParent";
import StudentList from "./components/student/StudentList";

function App() {

    return (
        <div className="container">
            <h1>APP</h1>
            <StudentList/>
        </div>
    );
    /*return (
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
    );*/
}

export default App;
