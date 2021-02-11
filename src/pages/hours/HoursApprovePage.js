import React, { useContext } from 'react';
import './hours.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom';
import HoursApprove from '../../components/HoursApprove/HoursApprove';

const HoursApprovePage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-hours-approve">
            <PortalNavbar 
            handleLogout={handleLogout}
            activeUser={activeUser}
            pageName={'אישור שעות'}
            />
            <h1>אישור שעות</h1>
            <HoursApprove activeUser={activeUser} />
        </div>
    );
}

export default HoursApprovePage;