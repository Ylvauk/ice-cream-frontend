import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">  
            <nav>
                <Link to="/" className="links">Home</Link>
                <Link to='/add-flavor' className="links">Add Flavor</Link>
            </nav>
        </div>
    );
};

export default Nav;