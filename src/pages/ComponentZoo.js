import React from 'react';
import HoursApprove from '../components/HoursApprove/HoursApprove';
import HoursReport from '../components/HoursReport/HoursReport';
import ButtonSet from '../components/ButtonSet';

class ComponentZoo extends React.Component{

    clickme = (thebutton)=>{
        console.log(thebutton.label);

    }
    render(){
        return (
            <div>
                {/* <HoursApprove /> */}
                <HoursReport />
            </div>
        )
    }
}
export default ComponentZoo;