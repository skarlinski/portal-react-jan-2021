import React from 'react';
import './PortalTabView.css' ;

class PortalTabView extends React.Component {
    constructor(props) {
        super(props) ;
    }

    render() {
        return (
            <div className="c-portal-table-view">
                <nav>
                    <ul>
                        <li><a href="#">פורטל</a></li>
                        <li><a href="#">קורסים</a></li>
                        <li><a href="">אודות</a></li>
                        <li><a href="#">דיווח</a></li>
                        <li><a href="#">דיווח</a></li>
                    </ul>
               </nav>
          </div>
        )
    }
}
export default PortalTabView ;