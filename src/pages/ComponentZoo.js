import React, { useState } from 'react';
import PortalSearchBar from '../components/searchbar/PortalSearchBar';

class ComponentZoo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchText:'',
            currentPage:0,
            resPageNum:0

        }
    }
    handleSearch = (text) => console.log('the text is' + text);
    pageChange = (page) => {
        this.setState({currentPage: page})
        console.log(page);
    }
    
    render(){
        return <div>
           <PortalSearchBar handleSearch={this.handleSearch}
            searchText={this.state.searchText}
            handleSearch={this.handleSearch}
            pageChange={this.pageChange}
            placeholderText="placeholder Text" resPageNum={this.state.resPageNum} 
            currentPage={this.state.currentPage} />
        </div>
    }
}
export default ComponentZoo;