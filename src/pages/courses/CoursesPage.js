import React, { useContext } from 'react';
import './courses.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import server from '../../shared/server';
import { act } from 'react-dom/test-utils';

class CoursesPage extends React.Component{
    constructor(props){
        super(props);
        this.activeUser = {token: '1304918f47c5f86e54935c4bed5563afbfd0c'};
        this.state = {
            courses: []
        }
    }
    componentDidMount(){
        server(this.activeUser, {"search":"","sorting":"courseid","desc":false,"coursestatus":1,"page":0}, 'SearchCourses').then( res => {
            console.log(res)
            this.setState({courses: res.data.courses}) 
        })
    }
    render(){
    if (!this.activeUser) {
        return <Redirect to='/' />
    }
    const coursesList = this.state.courses.map( (course) => {
        return <div>{course.name} - {course.subname} - {course.year}</div>
    } )
    return (
        <div className="p-courses">
            <PortalNavbar handleLogout={this.props.handleLogout}/>
            <h1>קורסים</h1>
            {coursesList}
        </div>
    );
    }
}

export default CoursesPage;