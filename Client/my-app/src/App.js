import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Books from "./Pages/Books/Books";
import Add from "./Pages/Add/Add";
import Update from "./Pages/Update/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
