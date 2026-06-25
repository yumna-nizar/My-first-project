import "./App.css";
import AdminDashboard from "./Components/AdminDashboard.jsx";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./Components/AddStudent.jsx";
import ViewStudent from "./Components/ViewStudent.jsx";
import Loginpage from "./Components/Loginpage.jsx";
import StudentDashboard from "./Components/StudentDashboard.jsx";
import StudViewProfile from "./Components/StudViewProfile.jsx";
import EditStudent from "./Components/EditStudent.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/view-student" element={<ViewStudent />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-profile" element={<StudViewProfile />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />

      </Routes>
    </>
  );
}

export default App;
