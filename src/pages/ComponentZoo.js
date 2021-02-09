import React, { useState } from 'react';
import PortalSearchBar from '../components/searchbar/PortalSearchBar';

    render(){
        const   title = "מס טלפון";
        const placeholder = "input-placeholder";
        return <div>
           myzoo
           <Input title={title} placeholder={placeholder} handleChange={this.handleChange} />
           <Input title={""} placeholder={placeholder} handleChange={this.handleChange} />
        </div>
    }
}
export default ComponentZoo;