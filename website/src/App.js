import React from "react";
import Home from "./components/Home/home";
import AddUser from "./components/addUser/addUser";
import Navbar from "./components/Navbar/Navbar";
import ConfirmDelete from "./components/DeleteConfirmation/deleteConfirmation";
import UpdateModal from "./components/UpdateModal/updateModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/confirmDelete" element={<ConfirmDelete />} />
          <Route path="/update" element={<UpdateModal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
