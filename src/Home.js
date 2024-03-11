import { Link, useNavigate } from "react-router-dom";
import './Home.css'

const Home = () => {
return(
    <div>
    <div class="welcome">
        <h1>WELCOME TO PIXSTECH EMPLOYEE DASHBOARD</h1>
        <div className="divbtn">
            <Link to="/register" className="btn btn-success">Register</Link>
            <Link to="/employee" className="btn btn-success">View List</Link>
        </div>
    </div>
    </div>
);
};

export default Home;
