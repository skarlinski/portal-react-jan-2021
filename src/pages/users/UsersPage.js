import React, { useContext, useState } from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import profileIcon from './profile_icon.svg'
import PortalTable from '../../components/PortalTable';
//import server
//import portal table

const UsersPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const [users , setUsers] = useState([]);

    //read data from api using server function
    
    if (!activeUser) {
        return <Redirect to='/' />
    }
    
    const handleClick = (data) => {
        console.log(data);
    };

    const headers = [
        {
            header:'שם',
            key:''
        },
        {
            header:'שם משפחה',
            key:''
        },
        {
            header:'אימייל',
            key:''
        }
    
    
    ]

    //create array with the data from the sate 
    const usersList = []

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
            {/* <PortalButtonSet/> */}
        </div>
    );
}

export default UsersPage;