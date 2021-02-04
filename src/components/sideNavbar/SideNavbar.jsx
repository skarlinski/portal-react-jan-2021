import React, { Component } from 'react';
import './sideNavbar.css';

import LiItem from './liItem';
import userIcon from './icons/userIcon.svg';
import bookIcon from './icons/bookIcon.svg';
import timeIcon from './icons/timeIcon.svg';
import checkBoxIcon from './icons/checkBoxIcon.svg';
import onOffIcon from './icons/onOffIcon.svg';
import profileIcon from './icons/profileIcon.svg';




class SideNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
        <div className="sidebar-wrap">

            <div className="sidebar">
                <div className="sidebar-header">
                    
                </div>
                <div className="user-name">
                    <LiItem title="יעל אביבי" icon={profileIcon}/>
                </div>
                <div className="sidebar-options">
                    <LiItem className='collapsed' title="משתמשים" icon={userIcon}>
                        <div className='collapsed-content' style={{height:'0px', overflow:'hidden'}}>
                            <LiItem title="רשומים" icon={userIcon}/>
                            <LiItem title="לא רשומים" icon={userIcon}/>
                            <LiItem title="משתים" icon={userIcon}/>
                        </div>
                    </LiItem>
                    <LiItem title="קורסים" icon={bookIcon}/>
                    <LiItem title="דיווח שעות" icon={timeIcon}/>
                    <LiItem title="אישור שעות" icon={checkBoxIcon}/>
                </div>
                <div className="log-out">
                <LiItem title="התנתקות" icon={onOffIcon}/>
                </div>
            </div>
        </div>

         );
    }
};
 
export default SideNavbar;