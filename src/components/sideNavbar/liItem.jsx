import React, { Component } from 'react';

class LiItem extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const {title, icon} = this.props;
        return ( 
            <div>
                <span><img src={icon}/></span>
                <span>{title}</span>
            </div>
         );
    }
}
 
export default LiItem;