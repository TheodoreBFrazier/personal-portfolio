import "./App.css";

import DarkMode from "./DarkMode";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Navigation

import NavBar from "./components/NavBar";

// Page imports

import HomePage from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <DarkMode />
        <Routes>
          
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
