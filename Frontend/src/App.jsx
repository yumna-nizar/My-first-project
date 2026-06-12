import "./App.css";
import Home from "./Components/Home.jsx";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./Components/AddStudent.jsx";
import ViewStudent from "./Components/ViewStudent.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/view-student" element={<ViewStudent />} />
      </Routes>
    </>
  );
}

export default App;
