import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Home</Link>
            <Link to={'/arizona'} className="navbar-item">See Arizona</Link>
        </nav>
     );
}
 
export default Header;