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
        console.log(response.data);
        setname(response.data.name);
      setemail(response.data.email);
      setage(response.data.age);
     
      } catch (error) {
        
      }

    
    }
    fetchstudent();
  }, []);

  async function submitStudent() {
    console.log(`${studentname} ${email} ${age}`);
    try {
        const response=await axios.put(`http://localhost:3000/editstudent/${id}`,
            {
                studentname,
                email,
                age
             });
             console.log(response.data);
             alert(`${response.data.student} ${response.data.message} `);

    }
    catch(error)
    {
        console.error(error.response.data.message);
         alert(error.response.data.message);
    }
  }

  return (
    <div className="addstudent-container">
      <h1>Student Editing Form</h1>
      <div className="form-group">
        <label>Student name:</label>
        <input type="text" value={studentname} onChange={(e) => setname(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setemail(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label>age:</label>
        <input type="text" value={age} onChange={(e) => setage(e.target.value)}></input>
      </div>
      <div className="button-container">
        <button className="submit-btn" onClick={submitStudent}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default EditStudent;
