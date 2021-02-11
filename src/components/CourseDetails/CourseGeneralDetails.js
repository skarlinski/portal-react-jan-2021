import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Input from "../Input";
import Select from "../Select";

const CourseGeneralDetails = function(props){
    const {courseData} = props;
    const [fullName, setFullName] = useState('');
    
    
    
    console.log("courseData",courseData)
    //arr=[{label:"fsfsd", value:"2"},{label:"dsf",value:"dsf"}]-->courseData.subject , courseData.subjectid
    
    const deatilsCourse = ()=>{
        const courses=[];
        if (courseData){
            const arr =courseData.subjects.map((item,index)=>{
                courses[index]={label:item.subject ,value: item.subjectid};
            }
            )
    }
        return courses;
}


    const deatilsListCourse =deatilsCourse();
    console.log("Arr",deatilsListCourse);
    
    return (
        <div className="p-course-general-details">
            <Row>
                <Input title="שם קורס מלא" value={fullName || courseData.name} handleChange={setFullName}/>
            </Row>
            <Row>
                <Col>
                    <Input title="שם קורס מקוצר בעברית" value={fullName || courseData.subname} handleChange={setFullName}/>
                </Col>
                <Col>
                 <Input title="שם קורס מקוצר בערבית" value={fullName || courseData.name} handleChange={setFullName}/>
            </Col>
            </Row>
            <Row>
                <Select title="פרוייקט" value={deatilsCourse.value} options={deatilsListCourse}/>
            </Row>
        </div>
    )
}
export default CourseGeneralDetails;