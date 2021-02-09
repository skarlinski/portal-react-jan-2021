import React, { useContext, useEffect, useState } from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import profileIcon from './profile_icon.svg'
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




    //read data from api using server function

    useEffect(() => {
    server(activeUser, {"search":"","sorting":"userid","desc":false,"userstatus":1,"page":0,"v":2.3} ,'SearchStaffUnderMe').then(res => {
        console.log(res);
        console.log(res.data.pages);

        setPageNum({resPageNum:res.data.pages});
        setUsers({users:res.data});
    })
},[]);
    

    if (!activeUser) {
        return <Redirect to='/' />
    }
    
    const handleClick = (data) => {
        console.log(data);
    };


    //gets the wanted search text (a string) from the search-bar module 
    // and makes an ajax call using the text string  (in the "search" key) and with "0" in the "pages" key
    const handleSearch = (text) => console.log('the text is' + text);

    //1. gets the wanted page num (integer) from the search-bar module (the currnet num +/- 1) and makes an ajax call 
    //    using the new page number (in the "pages" key)
    //2. update the new page number in the "currentPage" variable in the state

    const pageChange = (page) => {
        
        // this.setState({currentPage: page})
        console.log(page);
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

    const placeholderText = "חיפוש עובד"

    const buttons = [{key:'on', label:'עובדים  פעילים'},{key:'off', label:'עובדים לא פעילים'}]

    const usersList = users.users.users

    

    return (
        <div className="p-users">
            <PortalNavbar handleLogout={handleLogout}/>
            <PortalSearchBar handleSearch={handleSearch}
            searchText={searchText}
            handleSearch={handleSearch}
            pageChange={pageChange}
            placeholderText={placeholderText} resPageNum={resPageNum} 
            currentPage={currentPage} />
            {usersList? <PortalTable headers={headers} data={usersList}  handleClick={handleClick}/>: ''}
            

            <ButtonSet buttons={buttons} handleClick={handleClick}/>
        </div>
    );
}

export default UsersPage;