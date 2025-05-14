// components/Sidebar.js
import { Link } from "react-router-dom";
import '../StudentDashboard/layout.css'
import { MdDashboard } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";

const StudentSidebar = () => {
    return (
        <div className="student-sidebar" style={{ height: '100%' }}>
            <ul>
                <li className="dashboard-txt">Student Dashboard</li>
                <li><Link to="/"><MdDashboard size={24} /><span>Dashboard</span></Link></li>
                <li><Link to="/showDrive"><FaBriefcase size={24} /><span>Placement Drive</span></Link></li>
                <li><Link to="/showAluminis"><GiGraduateCap size={26} /><span>Aluminis</span></Link></li>
                <li><Link to="/showNotice"><MdMessage size={24} /><span>Notice</span></Link></li>
            </ul>
        </div>
    );
};

export default StudentSidebar;
