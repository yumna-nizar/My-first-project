import "../CompStyles/loginpage.css";
import { useState } from "react";
import axios from 'axios';
function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  async function handlesubmit(event) {
   
    console.log("button submitted");
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        email,
        password,
      });
      console.log(response.data);
      alert(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <div>
        <h1>Login Page</h1>
      </div>

      <div>
      <form onSubmit={handlesubmit}>
          <div className="news">
          
              <label>Username:</label>
            
            
              <input
                type="text"
                onChange={(event) => setUsername(event.target.value)}
              ></input>
            
          </div>
          <div className="news">
            
              <label>Email:</label>
            
            
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            
          </div>
          <div className="news">
            
              <label>Password:</label>
           
          
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            
          </div>

          <button  type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
export default Loginpage;
