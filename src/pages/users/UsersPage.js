import React, { useContext, useEffect, useState } from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import profileIcon from './profile_icon.svg'
import PortalTable from '../../components/PortalTable';
import ButtonSet from '../../components/ButtonSet';
import server from '../../shared/server';



const UsersPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const [users , setUsers] = useState([]);

    //read data from api using server function

    useEffect(() => {
    server(activeUser, {"search":"","sorting":"userid","desc":false,"userstatus":1,"page":-1,"v":2.3} ,'SearchStaffUnderMe').then(res => {
        console.log(res);
        console.log(res.data)
        console.log(res.data[0])


        setUsers({users:res.data})
    })
},[]);
    

    if (!activeUser) {
        return <Redirect to='/' />
    }
    
    const handleClick = (data) => {
        console.log(data);
    };


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

    const buttons = [{key:'on', label:'עובדים  פעילים'},{key:'off', label:'עובדים לא פעילים'}]

    //create array with the data from the state 
    const usersList = users.users

    

    return (
        <div className="p-users">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>עובדים</h1>
            {/* <PortalSearchBar handleSearch={this.handleSearch}
            searchText={this.state.searchText}
            handleSearch={this.handleSearch}
            pageChange={this.pageChange}
            placeholderText="placeholder Text" resPageNum={this.state.resPageNum} 
            currentPage={this.state.currentPage} /> */}
            {usersList? <PortalTable headers={headers} data={usersList}  handleClick={handleClick}/>: ''}
            

            <ButtonSet buttons={buttons} handleClick={handleClick}/>
        </div>
    );
}

export default UsersPage;