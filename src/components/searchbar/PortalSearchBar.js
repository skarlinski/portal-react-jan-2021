import React from 'react';
import searchIcon from './search_icon.svg';
import './PortalSearchBar.css';
import arrLeftImg from './arrow_l.svg';
import arrRightImg from './arrow_r.svg';
import arrLeftImgDisabled from './arrow_l_dis.svg';
import arrRightImgDisabled from './arrow_r_dis.svg';

class PortalSearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',

        }
    }

    

    sendSearch = () =>{
        this.props.handleSearch(this.state.value)
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
    const leftArrow = <span className="arrow" onClick={this.nextPage}><img src={arrLeftImg}/></span>;
    const rightArrow = <span className="arrow" onClick={this.prevPage}><img src={arrRightImg}/></span>;

    const leftArrowDisabled = <span className="disabled-arrow"><img src={arrLeftImgDisabled}/></span>;
    const rightArrowDisbled = <span className="disabled-arrow"><img src={arrRightImgDisabled}/></span>;
    

  
    return (
        <div className="nav-results">
            {(this.props.currentPage > 0)? rightArrow : rightArrowDisbled}
            <span>{this.props.currentPage +1}</span>
            {(this.props.currentPage +1 !== this.props.resPageNum)? leftArrow : leftArrowDisabled}
          
        </div>
        )
    }
    render(){ 
        return (
                <div className="c-search-bar">
                <div className="input-container">
                <input type="text" value={this.state.value} 
                    placeholder={this.props.placeholderText}
                     onChange={(e)=>this.setState({value: e.target.value})}/>
                
                {this.displayArrows()}
                </div>
                <img  className="search-button" src={searchIcon} onClick={this.sendSearch}/>
        </div>
        )
    }
}

export default PortalSearchBar;
