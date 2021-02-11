import React from 'react';
import { Container } from 'react-bootstrap';
import './PortalTabView.css' ;

class PortalTabView extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            current : (this.props.array) ? this.props.array[0] : null
        }
    }
   

    
    render() {
        const styleActiveTab={fontWeight:"bold" , borderBottom: "3px solid"} 
        const listHeadrs = this.props.array.map((item) => {
           return <li  style ={(this.state.current.header === item.header)? styleActiveTab : {}}>
               <a onClick={() => this.setState({ current : {header : item.header , view : item.view}})}> {item.header}</a></li>
        })
        return (
            <div className="c-portal-table-view">
                <nav>
                    <ul style={{borderBottom: "2px solid"}} > 
                        {listHeadrs}
                    </ul>
               </nav>
               <Container>
               {this.state.current.view}
               </Container>
          </div>
        )
    }
}
export default PortalTabView ;