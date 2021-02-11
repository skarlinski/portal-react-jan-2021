import React from 'react';
import {Form, Modal } from 'react-bootstrap';
import './MultipleSelect.css'

class MultipleSelect extends React.Component{
    constructor(props){
        super(props);
        this.state={
            unselectedOptions:this.props.options,
            showModal:false
        }
    }

    sortList=(arrOfObj)=>{
        return (arrOfObj.sort((a, b) => (a.label > b.label) ? 1 : -1));
    }

    handleSelectionAdd = (chosenOption)=>{
        if (!chosenOption.target.value){return};
        const index = chosenOption.target.value;
        const obj = this.state.unselectedOptions[index];
        const array =this.state.unselectedOptions;
        array.splice(index,1);
        const newselectedList = this.sortList(this.props.selectedOptions.concat(obj));
        this.props.handleSelection(newselectedList, obj, true);
    }

    handleSelectionDelete = (index) =>{
        const selectedObj = this.props.selectedOptions[index];
        const newselectedList =this.props.selectedOptions;
        newselectedList.splice(index,1);
        const newunselectedList = this.sortList(this.state.unselectedOptions.concat(selectedObj));
        this.setState({unselectedOptions:newunselectedList});
        this.props.handleSelection(newselectedList, selectedObj, false);
    }

    modalMultiSelect =()=>{
        const noMoreOptionsStyle = this.state.unselectedOptions.length===0 ? {display:"block"}:{display:"none"};
        const SelectStyle=this.state.unselectedOptions.length===0?{display:"none"}:{display:"block",cursor: "pointer"}
        const unselectedOptions = this.state.unselectedOptions.map((item,index) =>{
            return(<option key={item.value} value={index}>{item.label}</option>);
        });

        return(<Modal className="c-multiple-select-modal" show={this.state.showModal} onHide={()=>{this.setState({showModal:false})}}>
                    <Modal.Header className="modal-header">
                        <Modal.Title>בחר מבין האפשרויות</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Label className="title">{this.props.title}</Form.Label>
                                <Form.Control as="select" htmlSize={this.state.unselectedOptions.length} style={SelectStyle}
                                    onClick={this.handleSelectionAdd}>
                                {unselectedOptions}
                            </Form.Control>
                    </Form>
                    <span style={noMoreOptionsStyle}>אין אפשרויות נוספות</span>
                    </Modal.Body>
            </Modal>);
    }

    render(){
        const selectedOptions=this.props.selectedOptions.map((item,index)=>{
            return(
                <span key={index}>{item.label} 
                    <span className="selected-options" onClick={()=>this.handleSelectionDelete(index)} style={{fontWeight:"bold",cursor: "pointer"}}> x</span>
                </span>);
        });
        return(<div className="c-multiple-select">
            <span className="title">{this.props.title}</span>
                 {this.modalMultiSelect()}
            <div className="selectedValue">{selectedOptions}
            <span className="addOptionSign" onClick={()=>{this.setState({showModal:true})}}>+</span>
            </div>
        </div>
        );
    }
}

export default MultipleSelect;