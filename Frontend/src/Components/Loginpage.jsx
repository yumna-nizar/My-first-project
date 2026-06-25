import "../CompStyles/loginpage.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Loginpage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handlesubmit(event) {
    event.preventDefault();
    console.log("button submitted");
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      localStorage.setItem("email", password);
      alert(`logging into ${response.data.role}`);
      if (response.data.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/student-dashboard");
      }
    } catch (error) {
      alert(error.message);
      console.error(error.message);
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handlesubmit}>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Loginpage;
