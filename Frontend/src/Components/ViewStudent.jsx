import { useEffect, useState } from "react";
import "../CompStyles/viewstudent.css";
import axios from "axios";

function ViewStudent() {
    const [student,setStudent]=useState([]);
    useEffect(()=>{
        fetchstudent();
    },[]);
    async function fetchstudent()
    {
        try{
        const response=await axios.get("http://localhost:3000/viewstudent");
        setStudent(response.data);
        }
        catch(error)
        {
            console.log(error.message);
        }
    }
     async function handleDelete(id)
    {
       try {
        const response= await axios.delete(`http://localhost:3000/deletestudent/${id}`
        );
        alert(response.data.message);
       }
       catch(error)
       {
        alert(error.response.data.message);
       }
       fetchstudent();
    }
  return (
    <div className="viewstudent-container">
      <h1>Student viewing page</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {student.map((student)=><tr key={student._id}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.email}</td>
            <td><button>Edit</button><button onClick={()=>handleDelete(student._id)}>Delete</button></td>
            </tr>)}
           
        </tbody>
      </table>
    </div>
  );
}
export default ViewStudent;
