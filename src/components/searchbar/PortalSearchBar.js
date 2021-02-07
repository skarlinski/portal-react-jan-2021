import React from 'react';
import searchIcon from './search_icon.svg';
import './PortalSearchBar.css';
import arrLeftImg from './arrow_l.svg';
import arrRightImg from './arrow_r.svg';

class PortalSearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',

        }
    }

    sendSearch = (event) =>{
        this.props.handleSearch(event.target.value)
    }

    prevPage = () =>  {
        this.props.pageChange(this.props.currentPage - 1)
    }
    

    nextPage = () =>  {
        this.props.pageChange(this.props.currentPage + 1)
    }

     



displayArrows = () => {
    if (this.props.resPageNum === 0){
            return (
                <div className="nav-results">
                </div>
            )
    }
    const leftArrow = <span className="arrow"> <img src={arrLeftImg}/> </span>;
    const rightArrow = <span className="arrow"> <img src={arrRightImg} /> </span>

    const leftArrowDisabled = <span className="disabled-arrow"> <img src={arrLeftImg}/> </span>;
    const rightArrowDisbled = <span className="disabled-arrow"> <img src={arrRightImg} /> </span>;
    

  
    return (
        <div className="nav-results">
            {(this.props.currentPage !== this.props.resPageNum)? leftArrow : leftArrowDisabled}
             <span>{this.props.currentPage}</span>
            {(this.props.currentPage > 0)? rightArrow : rightArrowDisbled}
        </div>
    )
}


    render(){

         
        
        
        return (
            <div className="form-outline">
                <div className="c-search-bar input-group rounded ">
                <input type="search" value={this.state.value}
                    placeholder={this.props.placeholderText} className="form-control"/>
                <span className="search-button">
                <img src={searchIcon} onClick={this.sendSearch}/>
                </span>
                {this.displayArrows()}
     
           
            
        </div>
        
            </div>
        )
    }
}

export default PortalSearchBar;