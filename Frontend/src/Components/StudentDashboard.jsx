import React from 'react';
import { Link } from "react-router-dom";

function StudentDashboard () {


  return (
    <div>
        <h1>Student Dashboard</h1>
        <Link to="/student-profile">
            <button>View Profile</button>
          </Link>
    </div>
  )
}

export default StudentDashboard;