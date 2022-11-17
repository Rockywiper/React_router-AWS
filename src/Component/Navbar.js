import React from 'react';
import {Link} from 'react-router-dom';
import bg from 'C:/Users/91938/Desktop/Axis-bank-JFS/React js/react-router/src/Axisbank background.jpg';

const Navbar = () => {
    return(
        <nav className='ui raised very padded segment'>
            <h1 className='ui left floated header'>Axis Bank</h1>
            <div className='ui right floated header'>
                <button className='ui button'>
                    <Link to="/home">Home</Link>
                </button>
                <button className='ui button'>
                    <Link to="/about">About</Link>
                </button>
                <button className='ui button'>
                    <Link to="/contact">Contact</Link>
                </button>
            </div>
        </nav>
    )
}
export default Navbar