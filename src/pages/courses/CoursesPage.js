import React, { useContext, useEffect, useState } from 'react';
import './courses.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import PortalTable from '../../components/PortalTable';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import server from '../../shared/server';

const CoursesPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        server(activeUser, {"search": "", "sorting": "courseid", "desc": false, "coursestatus": 1,
        "page": 0}, 'SearchCourses').then( res => {
            console.log(res)
            console.log(res.data.courses)
            setCourses({courses: res.data.courses}) 
        })
    }, []);

    if (!activeUser) {
        return <Redirect to='/' />
    };

    const handleClick = (data) => {
        console.log(data);
    };

    const headers = 
        [
            {
                header: 'שם קורס מקוצר', 
                key: 'name'
            }, 
            {
                header: 'פרוייקט', 
                key: 'project'
            }, 
            {
                header: 'מדריך', 
                key: 'teachers'
            }
        ];
        // const data =
        //   [
        //     {
        //         cityname: "תל אביב",
		// 		code: "07TX",
		// 		courseid: "59",
		// 		name: "עובדים מלמדים עובדים",
		// 		project: "פנימי",
		// 		studentnum: "9",
		// 		subname: "עובדים מלמדים עובדים",
		// 		subnameinarabic: "עובדים מלמדים עובדים",
		// 		teachers: "ניר חנס",
		// 		year: "2017"
        //     }
		//   ];
        const coursesList = courses.courses
    return (
        <div className="p-courses">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>קורסים</h1>
            <div className="l-courses">
            {coursesList ? <PortalTable headers={headers} data={coursesList} 
                    handleClick={handleClick}/> : ''}
            </div>
        </div>
    );
}

export default CoursesPage;