import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {

    render() {
        return (
            <div align="center">

                <Link to="/allDayMenu">
                    <button>All-Day Menu</button>
                </Link>
                <p />

                <button>Breakfast</button>

            </div>
        )
    }
}

export default Menu;
