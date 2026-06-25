import "../CompStyles/student.css";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Admin Dashboard</h1>
        <p>Manage your students</p>
        <div className="button-group">
          <Link to="/add-student">
            <button className="dashboard-btn">Add Student</button>
          </Link>

          <Link to="/view-student">
            <button className="dashboard-btn">View Student</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AdminDashboard;
