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

    const handleSearch = (text) => console.log('the text is' + text);

    const pageChange = (page) => {
        this.setState({currentPage: page})
        console.log(resPageNum);
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

    const buttons = [{key:'on', label:'עובדים  פעילים'},{key:'off', label:'עובדים לא פעילים'}]

    //create array with the data from the state 
    const usersList = users.users.users
    console.log(usersList)

    

    return (
        <div className="p-users">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>עובדים</h1>
            <PortalSearchBar handleSearch={handleSearch}
            searchText={searchText}
            handleSearch={handleSearch}
            pageChange={pageChange}
            placeholderText="placeholder Text" resPageNum={resPageNum} 
            currentPage={currentPage} />
            {usersList? <PortalTable headers={headers} data={usersList}  handleClick={handleClick}/>: ''}
            

            <ButtonSet buttons={buttons} handleClick={handleClick}/>
        </div>
    );
}

export default UsersPage;