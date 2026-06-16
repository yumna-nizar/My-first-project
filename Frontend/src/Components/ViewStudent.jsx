import "../CompStyles/viewstudent.css";

function ViewStudent() {
  return (
    <div className="viewstudent-container">
      <h1>Student viewing page</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
export default ViewStudent;
