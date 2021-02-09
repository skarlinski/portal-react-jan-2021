import React from 'react';
import { Container } from 'react-bootstrap';
import './PortalTabView.css' ;

class PortalTabView extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            currentView : null
        }
    }

    
    
    render() {
        const listHeadrs = this.props.array.map((item) => {
           return <li><a onClick={() => this.setState({ currentView : item.view})}> {item.header}</a></li>
        })
        return (
            <div className="c-portal-table-view">
                <nav>
                    <ul> {listHeadrs}
                    {/* [{header:"פורטל", view:"/portal"},{header:"ישומים", view:"/yeshomim"} ] */}

                        {/* <li><a href="">פורטל</a></li>
                        <li><a href="">קורסים</a></li>
                        <li><a href="">אודות</a></li>
                        <li><a href="">דיווח</a></li> */}
                    </ul>
               </nav>
               <Container>
               {this.state.currentView}
               </Container>
          </div>
        )
    }
}
export default PortalTabView ;