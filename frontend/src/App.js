import "./App.css";

//importing Axios


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

        <Routes>
          
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
