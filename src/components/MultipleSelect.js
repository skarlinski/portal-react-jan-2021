import React from 'react';
import {Form, Modal } from 'react-bootstrap';
import './MultipleSelect.css'


class MultipleSelect extends React.Component{
    constructor(props){
        super(props);
        this.state={
            unselectedOptions:this.props.options,
            selectedOptions:[],
            isAdded:undefined,
            showModal:false 
        }
    }

    
    handleSelectionAdd = (ChossenOption)=>{
        if (!ChossenOption.target.value){return};
        const index = ChossenOption.target.value;
        const obj = this.state.unselectedOptions[index];
        // console.log('the obj',obj);
        this.setState({selectedOptions:this.state.selectedOptions.concat(obj)});

        const arr=this.state.unselectedOptions;
        arr.splice(index,1);
        this.setState({unselectedOptions:arr});

        // console.log(this.state.selectedOptions);
        this.props.handleSelection(this.state.selectedOptions.concat(obj), obj, true);

        //disable the option on the selectedoption
    }

    handleSelectionDelete = (index) =>{
        const obj = this.state.selectedOptions[index];
         console.log('the obj to remove',obj);
         this.setState()

         this.setState({unselectedOptions:this.state.unselectedOptions.concat(obj)});

         const arr=this.state.selectedOptions;
         arr.splice(index,1);
         this.setState({selectedOptions:arr});

         
         this.props.handleSelection(this.state.selectedOptions, obj, false);
    }
    render(){
        const selectedOptions=this.state.selectedOptions.map((item,index)=>{
            return(
                <span key={index}>{item.label} 
                    <span onClick={()=>this.handleSelectionDelete(index)} style={{fontWeight:"bold",color:"Red",cursor: "pointer"}}> x</span>
            </span>);
        });

        //value-i did item.label??
        const unselectedOptions = this.state.unselectedOptions.map((item,index) =>{
            return(<option key={item.value} value={index}>{item.label}</option>);
        });
        const SelectStyle=this.state.unselectedOptions.length===0?{display:"none"}:{display:"block",cursor: "pointer"}
        // const modalStyle=this.state.showModal?{display:"block"}:{display:"none"};
        const modal= () =>{
            return(
                <Modal className="modal" show={this.state.showModal} onHide={()=>{this.setState({showModal:false})}}>
                    <Modal.Header>
                        <Modal.Title>בחר מבין האפשרויות</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Label>{this.props.title}</Form.Label>
                                <Form.Control as="select" htmlSize={this.state.unselectedOptions.length} style={SelectStyle}
                                    onClick={this.handleSelectionAdd}>
                                {unselectedOptions}
                            </Form.Control>
                    </Form>
                    </Modal.Body>
            </Modal>
            );
        }
        return(<div className="c-multiple-select">
            {this.props.title}
            {modal()}
            <div className="selectedValue">{selectedOptions}
            <span className="addOptionSign" style={{background:"red"}} onClick={()=>{this.setState({showModal:true})}}>+</span>
            </div>
        </div>
        );
    }
}

export default MultipleSelect;