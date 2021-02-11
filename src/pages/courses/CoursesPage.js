import React, { useContext, useEffect, useState } from 'react';
import './courses.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import PortalTable from '../../components/PortalTable';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import server from '../../shared/server';
import ButtonSet from '../../components/ButtonSet';
import PortalSearchBar from '../../components/searchbar/PortalSearchBar';

const CoursesPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const [courses, setCourses] = useState([]);
    const [searchText , setText] = useState('');
    const [currentPage , setCurrPage] = useState(0);
    const [resPageNum , setPageNum] = useState(0);
    const [courseStatus , setCoursesStatus] = useState(0);



    useEffect(() => {
        server(activeUser, {"search": searchText, "sorting": "courseid", "desc": false, "coursestatus": courseStatus,
        "page": currentPage}, 'SearchCourses').then( res => {
            setText(searchText);
            setCurrPage(currentPage);
            setPageNum(resPageNum);
            setCourses(res.data.courses);
            setCoursesStatus(courseStatus); 
        });
    }, [currentPage, searchText, courseStatus]);

    if (!activeUser) {
        return <Redirect to='/' />
    };
    const handleClick = (data) => {
                // return <Redirect push to="/#/courses/data.courseid" />
        window.location = "/#/courses/" + data.courseid;
    };

    const clickCoursestatus = (data) => {
        setCurrPage(0);
        const key = (data.key == "off")? 0 : 1;
        setCoursesStatus(key);

    }

    const handleSearch = (text) => {
        setCurrPage(0);
        setText(text);
    }
        
    const pageChange = (page) => {
        setCurrPage(page);
    }


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

    const buttons =
            [
                {key:'on', label:'קורסים פעילים'},
                {key:'off', label:'קורסים לא פעילים'},
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
            <div className="search-courses">
                <PortalSearchBar handleSearch={handleSearch} searchText={searchText}
                    pageChange={pageChange} placeholderText="חיפוש קורס" 
                    resPageNum={resPageNum} currentPage={currentPage} />
            </div>
            <div className="l-courses">
                {coursesList ? <PortalTable headers={headers} data={coursesList} 
                        handleClick={handleClick}/> : ''}
            </div>
            <div className="f-courses">
                <ButtonSet buttons={buttons} handleClick={clickCoursestatus}/>
            </div>
            
        </div>
    );
}

export default CoursesPage;