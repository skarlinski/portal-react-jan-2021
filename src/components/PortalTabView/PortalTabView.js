import React from 'react';
import { Container } from 'react-bootstrap';
import './PortalTabView.css' ;

class PortalTabView extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            currentView : (this.props.array) ? this.props.array[0].view : null,
            activeTab: (this.props.array) ? this.props.array[0].header : null
        }
    }
   

    
    render() {
        const styleActiveTab={fontWeight:"bold"}
        const listHeadrs = this.props.array.map((item) => {
           return <li  style ={(this.state.activeTab === item.header)? styleActiveTab : {}}>
               <a onClick={() => this.setState({ currentView : item.view , activeTab : item.header})}> {item.header}</a></li>
        })
        return (
            <div className="c-portal-table-view">
                <nav>
                    <ul> 
                        {listHeadrs}
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