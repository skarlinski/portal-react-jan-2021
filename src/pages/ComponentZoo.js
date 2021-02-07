import React from 'react';
import PortalSearchBar from '../components/searchbar/PortalSearchBar';

class ComponentZoo extends React.Component{
    handleSearch = (text) => console.log('the text is' + text);
    pageChange = (page) => console.log(page);

    render(){
        return <div>
           <PortalSearchBar handleSearch={this.handleSearch}
            placeholderText="placeholder Text" resPageNum={3} 
            currentPage={2} pageChange={this.pageChange}/>
        </div>
    }
}
export default ComponentZoo;