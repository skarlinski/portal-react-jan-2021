import React from 'react';
import Input from '../components/Input';
// Props:
// - title. string. if missing not rendering a title and the component will be shorter.
// - placeholder. string.
// - handleChange. callback function. invoked when the input changes. sends the new text.

import ButtonSet from '../components/ButtonSet';
class ComponentZoo extends React.Component{
    handleChange = (e)=>{
        console.log(e);
    }

    clickme = (thebutton)=>{
        console.log(thebutton.label);

    }
    render(){
        const   title = "מס טלפון";
        const placeholder = "input-placeholder";
        return <div>
           myzoo
           <Input title={title} placeholder={placeholder} handleChange={this.handleChange} />
           <Input title={""} placeholder={placeholder} handleChange={this.handleChange} />
        </div>
    }
}
export default ComponentZoo;