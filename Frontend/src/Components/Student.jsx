import '../CompStyles/student.css'
function Student()
{
  
    async function addStudent()
    {
     
    }
    async function viewStudent()
    {

    }
    return(<>
    <div className="container">
      <div className="button-group">
        <button onClick={addStudent}>Add Student</button>
        <button onClick={viewStudent}>View Student</button>
      </div>
    </div>
    

    </>);
}
export default Student;
