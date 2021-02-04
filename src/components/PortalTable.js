import React from 'react';
import { Table } from 'react-bootstrap';
import './PortalTable.css'

class TableComp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {headers, data, handleClick} = this.props;

        return (
            <div>
              <Table className='c-portal-table' responsive >
                <thead>
                    <tr>{headers.map(col => <th>{col.header}</th>)}</tr>
                </thead>
                <tbody >
                    {data.map(item => <tr onClick={() => this.props.handleClick(item)}>{headers.map(col => <td>{item[col.key]}</td>)}</tr>)}
                </tbody>
              </Table>
          </div>
        );
     }
}

export default TableComp;