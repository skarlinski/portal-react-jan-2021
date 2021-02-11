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

    useEffect(() => {
        server(activeUser, {"search": "", "sorting": "courseid", "desc": false, "coursestatus": 1,
        "page": 0}, 'SearchCourses').then( res => {
            console.log(res)
            console.log(res.data.courses)
            setCourses({courses: res.data.courses}) 
        });
    }, []);

    if (!activeUser) {
        return <Redirect to='/' />
    };
    const handleClick = (data) => {
        console.log(data);
        console.log(data.courseid);
        // return <Redirect push to="/#/courses/data.courseid" />
        window.location = "/#/courses/" + data.courseid;
    };
    const clickCoursestatus = (data) => {
        console.log(data);
        if(data.key === "off"){
            server(activeUser, {"search": "", "sorting": "courseid", "desc": false, 
            "coursestatus": 0, "page": 0}, 'SearchCourses').then( res => {
                setCourses({courses: res.data.courses}) 
            });
        }
        else{
            server(activeUser, {"search": "", "sorting": "courseid", "desc": false, 
            "coursestatus": 1, "page": 0}, 'SearchCourses').then( res => {
                setCourses({courses: res.data.courses}) 
            });
        }
    };
    
    const handleSearch = (text) => console.log('the text is' + text);
    const pageChange = (page) => {
        this.setState({currentPage: page})
        console.log(page);
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