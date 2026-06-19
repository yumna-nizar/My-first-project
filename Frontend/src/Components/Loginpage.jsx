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
      alert(`logging into ${response.data.role}`);
      if (response.data.role==="admin") {
        navigate("/admin-dashboard");
      }
      else{
        navigate("/student-dashboard");
      }
    } catch (error) {
      alert(error.message);
      console.error(error.message);
    }
  }

  return (
    <>
      <div>
        <h1>Login Page</h1>
      </div>

      <div>
        <div className="news">
          <label>Username:</label>

          <input
            type="email"
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>
        <div className="news">
          <label>Password:</label>

          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>

        <button onClick={handlesubmit}>Submit</button>
      </div>
    </>
  );
}
export default Loginpage;
