import { useEffect, useState } from "react";
import "../CompStyles/addstudent.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const [studentname, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  useEffect(() => {
    async function fetchstudent() {
      try {
        const response = await axios.get(
          `http://localhost:3000/fetchstudent/${id}`,
        );
        if (response.data) {
          setname(response.data.name);
          setemail(response.data.email);
          setage(response.data.age);
        }
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    }
    fetchstudent();
  }, [id]);

  async function submitStudent() {
    console.log(`${studentname} ${email} ${age}`);
    try {
      const response = await axios.put(
        `http://localhost:3000/editstudent/${id}`,
        {
          studentname,
          email,
          age,
        },
      );
      console.log(response.data);
      alert(`${response.data.student} ${response.data.message} `);
    } catch (error) {
      console.error(error.response.data.message);
      alert(error.response.data.message);
    }
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>Edit Student</h1>
        <p>Update student information</p>
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
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
}
export default EditStudent;
