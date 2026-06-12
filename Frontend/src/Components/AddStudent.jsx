import { useState } from "react";
import "../CompStyles/addstudent.css";
import axios from 'axios';

function AddStudent() {
  const [studentname, setname] = useState("");
  const [email, setemail] = useState("");
  const [std, setstd] = useState("");

   async function submitSudent() {
    console.log(`${studentname} ${email} ${std}`);
    try {
        const response=await axios.post("/http://localhost:3000/addstundent",
            {
                studentname,
                email,
                std
             });
             console.log(response.data);
             alert("student request send succesfully");

    }
    catch(error)
    {
        console.error(error);
         alert("Error while adding student");
    }
    
    
  }

  return (
    <div className="addstudent-container">
      <h1>Student Adding Form</h1>
      <div className="form-group">
        <label>Student name:</label>
        <input type="text" onChange={(e) => setname(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="text" onChange={(e) => setemail(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label>Class:</label>
        <input type="text" onChange={(e) => setstd(e.target.value)}></input>
      </div>
      <div className="button-container">
        <button className="submit-btn" onClick={submitSudent}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default AddStudent;
