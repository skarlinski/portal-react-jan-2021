import React, { Component } from 'react';
import './sideNavbar.css';


class SubLiItem extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const {title, icon} = this.props;
        return ( 
        <div>
            <div className="c-subLiItem">
                <span className="m-3"><img src={icon}/></span>
                <span><a href={this.props.route}>{title}</a></span>
            </div>
        </div>
         );
    }
}
 
export default SubLiItem;