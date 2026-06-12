import { useState } from "react";
import "../CompStyles/addstudent.css";

function AddStudent() {
  const [studentname, setname] = useState("");
  const [email, setemail] = useState("");
  const [std, setstd] = useState("");

  function submitSudent() {
    console.log(`${studentname} ${email} ${std}`);
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
