import React from 'react';
import HoursApprove from '../components/HoursApprove/HoursApprove';
import HoursReport from '../components/HoursReport/HoursReport';

class ComponentZoo extends React.Component{

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