import "../CompStyles/student.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <><h1>Home Page</h1>
      <div className="container">
        
        <div className="button-group">
          <Link to="/add-student">
            <button>Add Student</button>
          </Link>

          <Link to="/view-student">
            <button>View Student</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Home;
