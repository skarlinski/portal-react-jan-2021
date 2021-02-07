import React from 'react';
import ButtonSet from '../components/ButtonSet';

class ComponentZoo extends React.Component{

    clickme = (thebutton)=>{
        console.log(thebutton.label);

    }
    render(){
        const myprops=[
            {key:'on', label:'עובדים פעילים'},
            {key:'off', label:'עובדים לא פעילים'},
            ];

        return <div>
           myzoo
           <ButtonSet buttons ={myprops} handleClick={this.clickme}/>
        </div>
    }
}
export default ComponentZoo;