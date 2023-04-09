import React from 'react';
import './navigation.css'

const Navigation = () => {
    return (
        <nav className="Nav">
            <div><a className='item' href="#">Profile</a></div>
            <div><a className='item' href="#">Message</a></div>
            <div><a className='item' href="#">News</a></div>
            <div><a className='item' href="#">Music</a></div>

            <div><a className='item' href="#">Settings</a></div>
        </nav>
    )
}
export default Navigation