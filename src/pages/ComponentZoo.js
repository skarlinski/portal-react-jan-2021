import React from 'react';
import HoursApprove from '../components/HoursApprove/HoursApprove';
import ButtonSet from '../components/ButtonSet';

class ComponentZoo extends React.Component{

    clickme = (thebutton)=>{
        console.log(thebutton.label);

    }
    render(){
        return (
            <div>
                <HoursApprove />
            </div>
        )
    }
}
export default ComponentZoo;