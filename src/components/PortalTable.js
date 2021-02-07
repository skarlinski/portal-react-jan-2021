import React from 'react';
import { Table } from 'react-bootstrap';
import './PortalTable.css'

class PortalTable extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {headers, data, handleClick} = this.props;
        const trs = data.map(item => <tr onClick={() => handleClick(item)}>
            {headers.map(col => <td>{item[col.key]}</td>)}</tr>)
        return (
            <div>
              <Table className='c-portal-table' responsive >
                <thead>
                    <tr>{headers.map(col => <th>{col.header}</th>)}</tr>
                </thead>
                <tbody >
                    {trs}
                </tbody>
              </Table>
          </div>
        );
     }
}

export default PortalTable;