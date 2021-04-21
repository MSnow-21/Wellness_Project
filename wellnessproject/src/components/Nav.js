import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        /* To add more links, copy lines 7-9 and change the property in 'to=' to its corresponding url link.*/
        <nav>
            <Link className='col-md-2' to='/test1'>
                This
            </Link>
            <Link className='col-md-2' to='/test2'>
                That
            </Link>
        </nav>
    )
}

export default Nav;