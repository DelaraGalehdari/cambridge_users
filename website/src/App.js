import React from "react";
import Home from "./components/Home/home";
import AddUser from "./components/addUser/addUser";
import Navbar from "./components/Navbar/Navbar";
import ConfirmDelete from "./components/DeleteConfirmation/deleteConfirmation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/confirmDelete" element={<ConfirmDelete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
