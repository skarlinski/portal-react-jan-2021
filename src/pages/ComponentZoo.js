import React from 'react';
import ButtonSet from '../components/ButtonSet';

class ComponentZoo extends React.Component{
    constructor(props){
        this.state = {
            searchText:'',
            currentPage:0
        }
    }
    render(){
        const myprops=[
            {key:'on', label:'עובדים פעילים'},
            {key:'off', label:'עובדים לא פעילים'},
            ];

        return <div>
           <PortalSearchBar handleSearch={this.handleSearch}
            searchText={this.state.searchText}
            handleSearch={this.handleSearch}
            placeholderText="placeholder Text" resPageNum={3} 
            currentPage={this.state.currentPage} pageChange={this.pageChange}/>
        </div>
    }
}
export default ComponentZoo;