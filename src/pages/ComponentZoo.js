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
            {key:'off', label:'עובדים פעילים'},
            {key:'on', label:'עובדים לא פעילים'},
            {key:'else', label:'bob'},
            {key:'what', label:'david'}
            ];

        const myarray =[{header:"פרופיל", view:<ButtonSet buttons={myprops} handleClick={this.clickme}/>},
                        {header:"קורסים", view:(<div>קורסים</div>)},
                        {header:"עובדים", view:(<div>עובדים</div>)},
                        {header:"דיווח", view:(<div>דיווח</div>)}   
                    ]

        return <div>
           
           <PortalTabView array={myarray}/>
        </div>
    }
}
export default ComponentZoo;