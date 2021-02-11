import React, { useContext } from 'react';
import './courses.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect, useParams } from 'react-router-dom'

const CoursesPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }


    return (
        <div className="p-courses">
            <PortalNavbar 
            handleLogout={handleLogout} 
            activeUser={activeUser}
            pageName={'קורסים'}
            />
            <h1>קורסים</h1>
        </div>
    );
}

export default CoursesPage;