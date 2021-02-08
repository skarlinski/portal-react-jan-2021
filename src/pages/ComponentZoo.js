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

        return <div>
           
           <PortalTabView />
        </div>
    }
}
export default ComponentZoo;