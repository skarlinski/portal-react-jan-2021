import React, { useContext, useEffect, useState } from 'react';
import './courses.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect, useParams } from 'react-router-dom'
import {religions, genders} from '../../data/data'
import server from '../../shared/server';

const CourseDetailsPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const {id} = useParams()
    const [shortName, setShortName] = useState('')
    const [fullName, setFullName] = useState('')
    // In functional component, we don't use this.setState. 
    // instead we get a function for each state key

    useEffect( () => {
        // This is the same as componentDidMount(){}
        server(activeUser, {courseid: id}, 'GetCourseById').then( (res) => {
            console.log(res)
            setShortName(res.data.subname);
            setFullName(res.data.name);
        })
    },[])
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-course-details">

            <PortalNavbar 
            handleLogout={handleLogout}
            activeUser={activeUser}
            pageName={'פרטי קורסים'}/>
            <div className="bottom-shadow">
            <h1>{shortName}</h1>
            <h2>{fullName}</h2>
            </div>  
        </div>
    );
}

export default CourseDetailsPage;