import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header >
        <div>
            <div className="cube-container">
              <div className="cube">
                <div className="face front">Uwe ...</div>
                <div className="face back">Uwe ...</div>
                <div className="face left">Uwe ...</div>
                <div className="face right">Uwe ...</div>
                <div className="face top"></div>
                <div className="face bottom"></div>
              </div>
            </div>
          </div>
          <p>
           Fibonacci Calculator K8s (GCP)
          </p>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <Routes>
          <Route path="/" element={<Fib />} />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
