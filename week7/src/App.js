import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/write" element={<Write />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
