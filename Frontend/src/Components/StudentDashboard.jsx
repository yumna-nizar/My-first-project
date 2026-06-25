import React from "react";
import { Link } from "react-router-dom";
import "../CompStyles/student.css";

function StudentDashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Student Dashboard</h1>
        <p>Welcome to your dashboard</p>
        <div className="button-group">
          <Link to="/student-profile">
            <button className="dashboard-btn">View Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
