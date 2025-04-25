import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends React.Component {
  render() {
    return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React and AWS and Google Cloud
          </a>

        </header>
        <div>
          <div className="nav">
            <Link to="/">Home</Link>
          </div>
          <div className="nav">
            <Link to="/otherpage">Other Page</Link>
          </div>
          <Routes>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </Routes>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
