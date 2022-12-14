import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Level1, Level2, Level3 } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
