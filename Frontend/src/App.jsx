import "./App.css";
import AdminDashboard from "./Components/AdminDashboard.jsx";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./Components/AddStudent.jsx";
import ViewStudent from "./Components/ViewStudent.jsx";
import Loginpage from "./Components/Loginpage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/view-student" element={<ViewStudent />} />
      </Routes>
    </>
  );
}

export default App;
