import { useState } from "react";
import Input from "../Input";

const CourseGeneralDetails = function(props){
    const {courseData} = props;
    const [fullName, setFullName] = useState('');
    console.log(courseData)
    return (
        <div className="p-course-general-details">
            <Input title="שם קורס מלא" value={fullName || courseData.name} handleChange={setFullName}/>
        </div>
    )
}
export default CourseGeneralDetails;