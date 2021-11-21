import logo from './logo.svg';
import './App.css';
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
// import Post from "./components/Post";
import State from "./components/State";
import PropFunction from "./components/PropFunction";
import PropFunctionParent from "./components/propfunction/PropFunctionParent";
import StudentList from "./components/student/StudentList";
import {BrowserRouter, Route, Link, Routes, NavLink} from "react-router-dom";
import Post from "./components/route/Post";
import Profile from "./components/route/Profile";
import Home from "./components/route/Home";
import Error404 from "./components/route/Error404";
import TestUseEffect from "./components/lifcycle/TestUseEffect";
import LoginForm from "./components/Form/LoginForm";
import Post2 from "./components/HOC/Post"

function App() {

    return (
        <div className="container">
            <h1>APP</h1>
            <BrowserRouter>
                <div>
                    <ul>
                        <li><NavLink to={""}>Home</NavLink></li>
                        <li><NavLink to={"posts"}>All Posts</NavLink></li>
                        <li><NavLink to={"profile"}>User Profile</NavLink></li>
                        <li><NavLink to={"posts/1"}>Post 1</NavLink></li>
                        <li><NavLink to={"posts/2"}>Post 2</NavLink></li>
                        <li><NavLink to={"posts?q=thitiwas"}>thitiwas</NavLink></li>
                        <li><NavLink to={"useEffect"}>useEffect</NavLink></li>
                        <li><NavLink to={"loginForm"}>login form</NavLink></li>
                        <li><NavLink to={"HOC"}>HOC</NavLink></li>
                    </ul>
                </div>
                <Routes>

                    <Route path={"*"} element={<Error404/>} />
                    <Route path={""} element={<Home/>} />
                    <Route path={"posts"} element={<Post/>}/>
                    <Route path={"posts/:id"} element={<Post/>}/>
                    <Route path={"profile"} element={<Profile/>}/>
                    <Route path={"home"} element={<Home/>}/>
                    <Route path={"useEffect"} element={<TestUseEffect/>}/>
                    <Route path={"loginForm"} element={<LoginForm/>}/>
                    <Route path={"HOC"} element={<Post2/>}/>
                </Routes>
            </BrowserRouter>
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
