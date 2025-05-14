import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/student.sidebar';
import { Outlet } from 'react-router-dom';

const StudentLayout = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}> {/* Changed to minHeight */}
            <Sidebar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Navbar />
                <div style={{ padding: '1rem', flex: 1, overflow: 'auto' }}> {/* Added overflow */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default StudentLayout;
