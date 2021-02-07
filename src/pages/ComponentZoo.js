import React from 'react';
import PortalSearchBar from '../components/searchbar/PortalSearchBar';

class ComponentZoo extends React.Component{
    handleSearch = (text) => alert ("the text is" + text);
    pageChange = () => console.log('page changed')

    render(){
        return <div>
           <PortalSearchBar handleSearch={this.handleSearch}
            placeholderText="placeholder Text" resPagesNum={5} currentPage={3} pageChange={this.pageChange}/>
        </div>
    }
}
export default ComponentZoo;