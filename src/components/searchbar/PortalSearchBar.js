import React from 'react';

class PortalSearchBar extends React.Component{
    constructor(props){
        super(props);
        state = {
            inputValue='',

        }
    }

    


    render(){
        return (
        <div className="c-search-bar">
            <input type="search" id="?" name="?" value="?" placeholder={this.props.placeholderText}/>

            
           
        </div>
        )
    }
}
export default PortalSearchBar;