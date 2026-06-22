import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CompStyles/Studviewprofile.css";

function StudViewProfile() {
  const [profile, setProfile] = useState({});
  const email = localStorage.getItem("email");
  async function viewprofile() {
    try {
      const response = await axios.get("http://localhost:3000/viewprofile", {
        params: {
          email: email,
        },
      });

      console.log("Email:", email);
      console.log("Response:", response.data);
      setProfile(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    viewprofile();
  }, [email]);

  if (!profile.name && !profile.email && !profile.age) {
    return (
      <div className="profile-container">
        <h1>My Profile</h1>
        <div className="profile-card">
          <div className="profile-loading">Loading profile...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-card">
        <div className="profile-field">
          <div className="profile-label">Name</div>
          <div className="profile-value">{profile.name || "—"}</div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Email</div>
          <div className="profile-value">{profile.email || "—"}</div>
        </div>
        <div className="profile-field">
          <div className="profile-label">Age</div>
          <div className="profile-value">{profile.age || "—"}</div>
        </div>
      </div>
    </div>
  );
}

export default StudViewProfile;
