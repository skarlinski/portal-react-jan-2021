import React, { Component } from 'react';


class UserLiItem extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const {title, icon} = this.props;
        return ( 
        <div>
            <div className="c-UserLiItem">
                <span className="m-3"><img src={icon}/></span>
                <span>{title}</span>
            </div>
        </div>
         );
    }
}
 
export default UserLiItem;