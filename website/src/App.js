import React from "react";
import Home from "./components/Home/home";
import AddUser from "./components/addUser/addUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
