import React, { useContext, useEffect, useState } from 'react';
import './courses.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect, useParams } from 'react-router-dom'
import {religions, genders} from '../../data/data'
import server from '../../shared/server';
import PortalTabView from '../../components/PortalTabView/PortalTabView';
import CourseGeneralDetails from '../../components/CourseDetails/CourseGeneralDetails';
import CourseTeachers from '../../components/CourseDetails/CourseTeachers';
import CourseSyllabus from '../../components/CourseDetails/CourseSyllabus';
import CourseStudents from '../../components/CourseDetails/CourseStudents';

const CourseDetailsPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const {id} = useParams()
    const [shortName, setShortName] = useState('');
    const [fullName, setFullName] = useState('');
    const [courseData, setCourseData] = useState({})
    // In functional component, we don't use this.setState. 
    // instead we get a function for each state key

    useEffect( () => {
        // This is the same as componentDidMount(){}
        server(activeUser, {courseid: id}, 'GetCourseById').then( (res) => {
            setCourseData(res.data);
            setShortName(res.data.subname);
            setFullName(res.data.name);
        })
    },[])
    if (!activeUser) {
        return <Redirect to='/' />
    }  
    const headers = [
        {header: 'קורס' , view: <CourseGeneralDetails courseData={courseData} />},
        {header: 'סילבוס' , view: <CourseSyllabus courseData={courseData} />},
        {header: 'סטודנטים' , view: <CourseStudents courseData={courseData}/>},
        {header: 'מדריכים' , view: <CourseTeachers courseData={courseData}/>},
    ];
    return (
        <div className="p-course-details">
            <PortalNavbar 
            handleLogout={handleLogout}
            activeUser={activeUser}
            pageName={'פרטי קורסים'}/>
            <div className="bottom-shadow">

                <h2>{fullName}</h2>
            </div> 
            <PortalTabView array={headers}/>
        </div>
    );
}

export default CourseDetailsPage;