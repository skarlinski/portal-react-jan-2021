import React, { useContext } from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import profileIcon from './profile_icon.svg'
const UsersPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }
    
    return (
        <div className="p-users">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>משתמשים</h1>
            <img src={profileIcon}/> 
        </div>
    );
}

export default UsersPage;