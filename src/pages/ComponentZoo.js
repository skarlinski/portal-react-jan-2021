import React, { useState } from 'react';
import PortalSearchBar from '../components/searchbar/PortalSearchBar';

class ComponentZoo extends React.Component{
    constructor(props){
        this.state = {
            searchText:''
        }
    }
    handleSearch = (text) => console.log('the text is' + text);
    pageChange = (page) => console.log(page);
    
    render(){
        return <div>
           <PortalSearchBar handleSearch={this.handleSearch}
            searchText={this.state.searchText}
            handleSearch={this.handleSearch}
            placeholderText="placeholder Text" resPageNum={3} 
            currentPage={2} pageChange={this.pageChange}/>
        </div>
    }
}
export default ComponentZoo;