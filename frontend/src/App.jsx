
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddRating from "./pages/AddRating";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRating />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
