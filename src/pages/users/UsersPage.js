import React, { useContext, useEffect, useState } from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import PortalTable from '../../components/PortalTable';
import ButtonSet from '../../components/ButtonSet';
import server from '../../shared/server';
import PortalSearchBar from '../../components/searchbar/PortalSearchBar';



const UsersPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const [users , setUsers] = useState([]);
    const [searchText , setText] = useState('');
    const [currentPage , setCurrPage] = useState(0);
    const [resPageNum , setPageNum] = useState(0);
    const [userStatus , setUserStatus] = useState(0);


useEffect(() => {
    server(activeUser, {"search":searchText,"sorting":"userid","desc":false,"userstatus":userStatus,"page":currentPage} ,'SearchStaffUnderMe').then(res => {
        setPageNum(res.data.pages);
        setUsers(res.data.users);
        console.log(res.data.users);
    })
},[searchText, userStatus, currentPage]);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    
    const handleSearch = (text) => {
        setText(text);
    }

    const pageChange = (page) => {
            setCurrPage(page);
        }
          
    const clickUserStatus = (data) => {
        let keyVar = (data.key === "off")? 0 : 1;
        setUserStatus(keyVar);
    }

       

    const headers = [
        {
            header:'שם',
            key:'firstname'
        },
        {
            header:'שם משפחה',
            key:'lastname'
        },
        {
            header:'אימייל',
            key:'email'
        }
    ]

    const placeholderText = "חיפוש עובד";

    const buttons = [{key:'on', label:'עובדים  פעילים'},{key:'off', label:'עובדים לא פעילים'}];

    const usersList = users.users;


    return (
        <div className="p-users">
            <PortalNavbar handleLogout={handleLogout}/>
            <PortalSearchBar handleSearch={handleSearch}
            searchText={searchText}
            handleSearch={handleSearch}
            pageChange={pageChange}
            placeholderText={placeholderText} resPageNum={resPageNum} 
            currentPage={currentPage} />
            {usersList? <PortalTable headers={headers} data={usersList}/>: ''}
            <ButtonSet buttons={buttons} handleClick={clickUserStatus}/>
        </div>
    );
}

export default UsersPage;