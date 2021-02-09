import React from 'react';
import ButtonSet from '../components/ButtonSet';
import PortalTable from '../components/PortalTable';
import PortalTabView from '../components/PortalTabView/PortalTabView';
import CoursesPage from './courses/CoursesPage';
import LoginPage from './login/LoginPage';



class ComponentZoo extends React.Component{

    clickme = (thebutton)=>{
        console.log(thebutton.label);

    }
    render(){
        const myprops=[
            {key:'on', label:'עובדים פעילים'},
            {key:'off', label:'עובדים לא פעילים'},
            ];

        const myarray =[{header:"פרופיל", view:"/portal"},
                        {header:"קורסים", view:"/yeshomim"},
                        {header:"עובדים", view:"/yeshomim"},
                        {header:"דיווח", view:"/yeshomim"}   
                    ]

        return <div>
           
           <PortalTabView array={myarray}/>
        </div>
    }
}
export default ComponentZoo;