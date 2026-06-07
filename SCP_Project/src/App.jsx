import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AddScp from "./AddScp";
import EditScp from "./EditScp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddScp />} />
        <Route path="/edit/:id" element={<EditScp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;