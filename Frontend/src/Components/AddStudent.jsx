import { useState } from "react";
import "../CompStyles/addstudent.css";
import axios from "axios";

function AddStudent() {
  const [studentname, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");

  async function submitStudent() {
    console.log(`${studentname} ${email} ${age}`);
    try {
      const response = await axios.post("http://localhost:3000/addstudent", {
        studentname,
        email,
        age,
      });
      console.log(response.data);
      alert(`${response.data.student} ${response.data.message} `);
      setname("");
      setemail("");
      setage("");
      //once submit button is clicked the feilds get blank to add next student details..
      //that is why we setname() setemail()  setage() with emty strings
    } catch (error) {
      console.error(error.response.data.message);
      alert(error.response.data.message);
    }
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>Add Student</h1>
        <p>Create a new student account</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitStudent();
          }}
        >
          <div className="form-group">
            <label>Student Name:</label>
            <input
              type="text"
              value={studentname}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddStudent;
