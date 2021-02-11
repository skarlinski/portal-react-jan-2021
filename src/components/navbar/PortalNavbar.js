import React, { Component } from 'react';
import server from '../../shared/server.js';

import SubLiItem from './SubLiItem';
import UserLiItem from './icons/UserLiItem';
import LiItem from './LiItem';

import userIcon from './icons/userIcon.svg';
import bookIcon from './icons/bookIcon.svg';
import timeIcon from './icons/timeIcon.svg';
import checkBoxIcon from './icons/checkBoxIcon.svg';
import onOffIcon from './icons/onOffIcon.svg';
import profileIcon from './icons/profileIcon.svg';
import arrowDown from './icons/arrowDown.svg';
import appleSeedsLogo from './icons/appleSeedsLogo.svg';
import hamburger from './icons/hamburger.svg';
import close from './icons/close.svg';

import './sideNavbar.css';
import UsersLiItem from './UsersLiItem.jsx';
import { Redirect } from 'react-router-dom';

class PortalNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userCollapse: true,
            isNavOpen: false,
            userData: {}
        }
    }
    
    componentDidMount(){
        server(this.props.activeUser, {}, 'GetMyProfile').then( (res ) => {
            this.setState({userData: res.data});
        
        })
    }

    toggleSideNav = () => {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }

    handleCollapse = () => {
        const userCollapse = !this.state.userCollapse
        this.setState({userCollapse})
    }

    render() { 
        const {userData} = this.state;
        const {pageName} = this.props;

        const MainHeaderContent =        
        <div className="main-header">
        <img src={hamburger} onClick={this.toggleSideNav}/>
        <span>{pageName}</span>
        </div>;
        
        if (!this.state.isNavOpen) {
            return MainHeaderContent;
        }

        const arrowDownspan = <span className="arrow"><img src={arrowDown} /></span>;

        const collapsedStyle = (this.state.userCollapse)? 
        {height:'0px', overflow:'hidden'} :{};

        const arrowDownTern = (this.state.userCollapse)? <span></span>
        :arrowDownspan;

        const userName = `${userData.firstname} ${userData.lastname}`;
        const currentUserIcon = (userData.image !== '')? userData.image : profileIcon;

        return ( 
        <div className="sidebar-bg" >
            <div className="sidebar">
                <div className="sidebar-header">
                    <span onClick={this.toggleSideNav}>
                        <img src={close}/>
                    </span>
                    <img src={appleSeedsLogo}/>
                </div>
                <div className="user-name">
                    <UserLiItem 
                    title={userName} icon={currentUserIcon}/>
                </div>
                <div className="sidebar-options">
                    <UsersLiItem
                    handleCollapse={this.handleCollapse}
                    title="משתמשים" icon={userIcon}
                    arrowDown={arrowDownTern}
                     >
                        <div style={collapsedStyle}>
                            <SubLiItem title="עובדים" icon={bookIcon}/>
                            <SubLiItem title="חניכים" icon={bookIcon}/>
                            <SubLiItem title="משתמשים חדשים" icon={bookIcon}/>
                        </div>
                    </UsersLiItem>
                    <div className="itemsUnderUsers">
                    <LiItem route={"/#/courses"} title="קורסים" icon={bookIcon}/>
                    <LiItem route={"/#/hours-report"} title="דיווח שעות" icon={timeIcon}/>
                    <LiItem route={"/#/hours-approve"} title="אישור שעות" icon={checkBoxIcon}/>
                    </div>
                </div>
                <div className="log-out">
                <LiItem title="התנתקות" icon={onOffIcon}/>
                </div>

            </div>
            <div className="rest-page-bg"></div>
        </div>

         );
    }
};
 
export default PortalNavbar;