import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AllDayMenu extends Component {

    render() {
        return (
            <div align="center">    
                <Link to="/menu">
                    <button>Menu</button>
                </Link>    
                <p />
                <button>Send to kitchen</button>
            </div>
            
        )
    }
}

export default AllDayMenu;
