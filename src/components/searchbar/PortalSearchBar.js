import React from 'react';
import searchIcon from './search_icon.svg';
import './PortalSearchBar.css';
import arrLeft from './arrow_l.svg';
import arrRight from './arrow_r.svg';

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

    
 

//  if:
//                 this.props.resPagesNum == 0 dont display arrows 
//                 this.props.currentPage == 1 display disabled right arrow
//                 this.props.currentPage == this.props.resPagesNum display disabled left arrow
//                 this.props.resPageNum == 1 display both disabled arrows 

displayArrows = () => {
            
    if (this.props.resPagesNum === 0){
            return (
                <div className="nav-results">
                </div>
            )



        // dont display arrows
    }
    if (this.props.currentPage == 1){

        return (
            <div className="nav-results">
            <span className="disabledArrow"> <img src={arrRight}/> </span>
            <span>{this.props.currentPage}</span>
            <span> <img src={arrLeft} onClick={this.nextPage}/></span>
            </div>
        )

        // display disabled right arrow
    }
    if (this.props.currentPage == this.props.resPagesNum){
        return (
            <div className="nav-results">
            <span> <img src={arrRight} onClick={this.prevPage}/> </span>
            <span>{this.props.currentPage}</span>
            <span className="disabledArrow"> <img src={arrLeft}/> </span>
            </div>
        )

        // display disabled left arrow
    }
    if (this.props.resPageNum == 1) {
        return (
            <div className="nav-results">
            <span className="disabledArrow"> <img src={arrRight} /> </span>
            <span>{this.props.currentPage}</span>
            <span className="disabledArrow"> <img src={arrLeft}/> </span>
            </div>
        )
        // display both disabled arrow
    }
    else {
        return (
            <div className="nav-results">
            <span> <img src={arrRight} onClick={this.prevPage}/> </span>
            <span>{this.props.currentPage}</span>
            <span> <img src={arrLeft} onClick={this.nextPage}/> </span>
            </div>
        )
        
    }
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