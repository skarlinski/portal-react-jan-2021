import React, { Component } from 'react';
import './sideNavbar.css';

import LiItem from './LiItem';
import SubLiItem from './SubLiItem';
import UserLiItem from './icons/UserLiItem';

import userIcon from './icons/userIcon.svg';
import bookIcon from './icons/bookIcon.svg';
import timeIcon from './icons/timeIcon.svg';
import checkBoxIcon from './icons/checkBoxIcon.svg';
import onOffIcon from './icons/onOffIcon.svg';
import profileIcon from './icons/profileIcon.svg';
import arrowDown from './icons/arrowDown.svg';
import appleSeedsLogo from './icons/appleSeedsLogo.svg';




class SideNavbar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userCollapse: true
        }
    }

    handleCollapse = () => {
        const userCollapse = !this.state.userCollapse
        this.setState({userCollapse})
    }

    render() { 
        // const collapsedStyle = {
        //     height:'0px',
        //      overflow:'hidden'
        // }
        const arrowDownspan = <span className="arrow"><img src={arrowDown} /></span>;

        const collapsedStyle = (this.state.userCollapse)? 
        {height:'0px', overflow:'hidden'} :{};

        const arrowDownTern = (this.state.userCollapse)? <span></span>
        :arrowDownspan;

        return ( 
        <div className="sidebar-wrap">

            <div className="sidebar">
                <div className="sidebar-header">
                    <span>X</span>
                    <img src={appleSeedsLogo}/>
                    
                </div>
                <div className="user-name">
                    <UserLiItem 
                    title="יעל אביבי" icon={profileIcon}/>
                </div>
                <div className="sidebar-options">
                    <LiItem 
                    handleCollapse={this.handleCollapse}
                    className='collapsed' title="משתמשים" icon={userIcon}
                    arrowDown={arrowDownTern}
                     >
                        <div className='collapsed-content' style={collapsedStyle}>
                            <SubLiItem title="עובדים" icon={userIcon}/>
                            <SubLiItem title="חניכים" icon={userIcon}/>
                            <SubLiItem title="משתמשים חדשים" icon={userIcon}/>
                        </div>
                    </LiItem>
                    <div className="itemsUnderUsers">
                    <LiItem title="קורסים" icon={bookIcon}/>
                    <LiItem title="דיווח שעות" icon={timeIcon}/>
                    <LiItem title="אישור שעות" icon={checkBoxIcon}/>
                    </div>
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